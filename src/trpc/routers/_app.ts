import { z } from 'zod';
import {  createTRPCRouter } from '../init';
import { inngest } from '@/inngest/client';
import { messageRouter } from '@/modules/messages/servers/procedures';
import { projectsRouter } from '@/modules/projects/servers/procedures';
export const appRouter = createTRPCRouter({

  messages: messageRouter,
  projects: projectsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;