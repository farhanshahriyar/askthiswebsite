# AskThisWebsite

 **AskThisWebsite**, a web-based chat application built using modern web development technologies. The project demonstrates a scalable, interactive chatbot interface integrated with custom middleware and components.

## Directory Structure

```
farhanshahriyar-askthiswebsite/
├── README.md
├── bun.lockb
├── components.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── .eslintrc.json
└── src/
    ├── middleware.ts
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── [...url]/
    │   │   └── page.tsx
    │   ├── api/
    │   │   └── chat-stream/
    │   │       └── route.ts
    │   └── fonts/
    │       ├── GeistMonoVF.woff
    │       └── GeistVF.woff
    ├── components/
    │   ├── ChatInput.tsx
    │   ├── ChatWrapper.tsx
    │   ├── Message.tsx
    │   ├── Messages.tsx
    │   └── Providers.tsx
    └── lib/
        ├── rag-chat.ts
        ├── redis.ts
        └── utils.ts
```

### Key Files and Folders

#### `src/`
- **`middleware.ts`**: Middleware for handling server-side logic.
- **`app/`**: Next.js app directory, including:
  - `globals.css`: Global CSS styles.
  - `layout.tsx`: Root layout for the application.
  - `page.tsx`: Main page of the application.
  - `[...url]/`: Dynamic routing logic.
    - `page.tsx`: Handles dynamic URLs.
  - `api/chat-stream/route.ts`: API route for chat streaming.
  - `fonts/`: Custom fonts used in the app.
    - `GeistMonoVF.woff` and `GeistVF.woff`: Font files.
- **`components/`**: React components:
  - `ChatInput.tsx`: Input field for chat.
  - `ChatWrapper.tsx`: Wrapper for the chat interface.
  - `Message.tsx`: Component to display individual messages.
  - `Messages.tsx`: Handles rendering of all messages.
  - `Providers.tsx`: Context providers for the app.
- **`lib/`**: Utility and library files:
  - `rag-chat.ts`: Logic for chat functionality.
  - `redis.ts`: Redis integration.
  - `utils.ts`: Utility functions.

## Features

- **Dynamic Chat Functionality**: 
  - Supports real-time chat updates and dynamic routing for different chat sessions.
  - Leverages WebSocket or Server-Sent Events to provide instant message delivery and updates.

- **Custom Middleware**:
  - Centralized logic for handling authentication, request validation, and API rate limiting.
  - Ensures secure and efficient communication between the client and server.

- **API Integration**:
  - Chat-stream API built to handle streaming responses for a conversational experience.
  - Allows for seamless integration with back-end systems and third-party APIs.

- **Responsive User Interface**:
  - Built with Tailwind CSS for a fully responsive and modern design.
  - Ensures optimal usability across devices, including desktops, tablets, and smartphones.

- **Customizable Components**:
  - Modular React components such as `ChatInput`, `ChatWrapper`, and `Messages` for reusability and scalability.
  - Easy to extend and customize based on specific requirements.

- **State Management with Providers**:
  - Uses React Context API to manage global state efficiently.
  - Simplifies state sharing across nested components.

- **Redis Integration**:
  - Implements Redis for caching and session management to optimize performance.
  - Reduces server load and accelerates response times for frequent requests.

- **TypeScript Support**:
  - Ensures type safety and better code maintainability.
  - Enhances developer productivity by catching errors at compile time.

- **Linting and Code Quality**:
  - Configured with ESLint to enforce consistent coding standards.
  - Improves code readability and maintainability.

- **Bun Runtime**:
  - Utilizes the Bun runtime for faster builds and runtime efficiency.

## Technologies Used

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Server**: Node.js (via Bun runtime)
- **Database**: Redis
- **Utilities**: PostCSS, ESLint

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/farhanshahriyar/askthiswebsite.git
   cd askthiswebsite
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun dev
   ```

4. Open the app in your browser at `http://localhost:3000`.

## Deployment

For deployment, configure the production environment in `next.config.mjs` and build the project:

```bash
bun build
bun start
```

