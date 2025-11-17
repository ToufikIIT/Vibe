# Vibe

> Create Apps and Websites by chatting with AI

Vibe is an AI-powered application builder that allows you to create full-stack Next.js applications through natural language conversations. Simply describe what you want to build, and Vibe's AI agent will generate, preview, and deploy your application in a sandboxed environment.

## ✨ Features

- 🤖 **AI-Powered Development**: Build complete Next.js applications by describing your ideas in plain English
- 🎨 **Live Preview**: See your generated applications in real-time with a live preview
- 📁 **Code Explorer**: Browse and inspect all generated files with a built-in file explorer
- 🔒 **User Authentication**: Secure authentication powered by Clerk
- 💾 **Project Management**: Organize and manage multiple projects with conversation history
- 🚀 **Sandboxed Execution**: Safe code execution in isolated E2B sandboxes
- 📊 **Usage Tracking**: Monitor your usage and manage your subscription
- 🎯 **Production-Ready Code**: Generates complete, functional applications with Shadcn UI components

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.4](https://nextjs.org/) with Turbopack
- **Language**: TypeScript
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (Radix UI primitives)
- **Styling**: Tailwind CSS 4
- **Database**: PostgreSQL with [Prisma ORM](https://www.prisma.io/)
- **Authentication**: [Clerk](https://clerk.com/)
- **API Layer**: [tRPC](https://trpc.io/)
- **State Management**: [TanStack Query](https://tanstack.com/query)
- **Background Jobs**: [Inngest](https://www.inngest.com/)
- **AI Agent Framework**: [Inngest Agent Kit](https://www.inngest.com/agent-kit)
- **AI Model**: Google Gemini 2.5 Flash Lite
- **Code Execution**: [E2B Code Interpreter](https://e2b.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL database
- Accounts for:
  - [Clerk](https://clerk.com/) (for authentication)
  - [Inngest](https://www.inngest.com/) (for background job processing)
  - [E2B](https://e2b.dev/) (for sandboxed code execution)
  - Google Cloud (for Gemini API access)

## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/ToufikIIT/Vibe.git
cd vibe### 2. Install dependencies

npm install
# or
yarn install
# or
pnpm install### 3. Set up environment variables

Create a `.env` file in the root directory and add the following variables:

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/vibe?schema=public"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

# Google Gemini AI
GEMINI_KEY=your_gemini_api_key

# E2B (optional, if using custom sandbox template)
E2B_API_KEY=your_e2b_api_key

# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000### 4. Set up the database

# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# (Optional) Seed the database
# npx prisma db seed### 5. Run the development server
sh
npm run dev
# or
yarn dev
# or
pnpm devOpen [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 6. Set up Inngest (for production)

For local development, you can use the Inngest Dev Server:

npx inngest-cli devFor production, configure your Inngest dashboard and set up webhooks pointing to your application's `/api/inngest` endpoint.

## 📁 Project Structure

```
vibe/
├── prisma/
│   ├── migrations/          # Database migrations
│   └── schema.prisma        # Prisma schema
├── public/                  # Static assets
├── sandbox-templates/       # E2B sandbox templates
│   └── nextjs/             # Next.js sandbox configuration
├── src/
│   ├── app/                # Next.js app router pages
│   │   ├── (home)/         # Home route group
│   │   ├── api/            # API routes
│   │   └── projects/       # Project pages
│   ├── components/         # React components
│   │   ├── ui/             # Shadcn UI components
│   │   └── ...             # Custom components
│   ├── generated/          # Generated files (Prisma client)
│   ├── hooks/              # Custom React hooks
│   ├── inngest/            # Inngest functions and configuration
│   ├── lib/                # Utility functions
│   ├── modules/            # Feature modules
│   │   ├── home/           # Home page module
│   │   ├── messages/       # Messages module
│   │   ├── projects/       # Projects module
│   │   └── usage/          # Usage tracking module
│   ├── trpc/               # tRPC configuration and routers
│   └── types.ts            # TypeScript type definitions
├── components.json          # Shadcn UI configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## 🎯 How It Works
- User Input: Users describe what they want to build in a chat interface
- Agent Processing: The Inngest agent receives the request and processes it using Gemini AI
- Code Generation: The AI agent generates Next.js code in an isolated E2B sandbox
- File Management: Generated files are stored and tracked
- Live Preview: Users can preview the generated application in real-time
- Code Inspection: Users can explore all generated files through the code explorer