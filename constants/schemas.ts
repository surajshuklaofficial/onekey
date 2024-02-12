import { z } from "zod";

export const taskSchema = z.object({
  username: z.string(),
  person: z.string(),
  status: z.string(),
  primary_email: z.string(),
});
