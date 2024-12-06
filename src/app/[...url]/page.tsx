import { ChatWrapper } from "@/components/ChatWrapper";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import { cookies } from "next/headers";

interface PageProps {
    params: {
        url: string | string[] | undefined;
    };
}

function reconstructUrl({ url }: { url: string[] }) {
    const decodedComponents = url.map((component) => decodeURIComponent(component));
    return decodedComponents.join("/");
}

const Page = async ({ params }: PageProps) => {
    // Ensure params.url exists
    if (!params.url) {
        return <p>No URL provided</p>;
    }

    // Reconstruct the URL
    const sessionCookie = cookies().get("sessionId")?.value
    const reconstructedUrl = reconstructUrl({ url: params.url as string[] });
    // console.log(params);

    const sessionId = (reconstructedUrl + "--" + sessionCookie).replace(/\//g, "")

    const isAlreadyIndexed = await redis.sismember("indexed-urls", reconstructedUrl)
    // console.log('isAlreadyIndexed', isAlreadyIndexed)

    const initialMessages = await ragChat.history.getMessages({ amount: 10, sessionId })


    // sessions 
    // const sessionId = "mock-session"
    // const sessionId = cookies().get("sessionId")?.value

    // Ensure ragChat and its context are defined before using them
    if (!isAlreadyIndexed) {
        if (ragChat && ragChat.context && ragChat.context.add) {
            try {
                // Add the URL to the ragChat context
                await ragChat.context.add({
                    type: "html",
                    source: reconstructedUrl,
                    config: { chunkOverlap: 50, chunkSize: 200 },
                });

                await redis.sadd("indexed-urls", reconstructedUrl);
            } catch (error) {
                console.error("Failed to add context to ragChat:", error);
            }
        } else {
            console.error("ragChat or its context is not defined properly.");
        }
    }

    return <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />
};

export default Page;
