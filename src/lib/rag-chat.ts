import { RAGChat, upstash } from "@upstash/rag-chat";

export const regChat = new RAGChat({
    model: upstash("meta-llama/Meta-Llama-3-8B-Instruct"),
})

