import { inngest } from "./client";
import { gemini, createAgent } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const writer = createAgent({
      name: "writer",
      system:
        "You are an expert writer.  You write readable, concise, simple content.",
      model: gemini({ model: "gemini-2.5-pro" , apiKey: process.env.GEMINI_KEY! }),
    });
    const { output } = await writer.run(
      `Write about the following topic in 100 words: ${event.data.value}`
    );
    return { output };
  }
);
