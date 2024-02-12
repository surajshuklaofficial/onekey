import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  username: z.string(),
  person: z.string(),
  status: z.string(),
  primary_email: z.string(),
})

export type Task = z.infer<typeof taskSchema>