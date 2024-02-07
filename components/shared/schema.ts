import { z } from "zod"

// We're keeping a simple non-relational schema here.
export const taskSchema = z.object({
  username: z.string(),
  person: z.string(),
  status: z.string(),
  primary_email: z.string(),
})

export type Task = z.infer<typeof taskSchema>