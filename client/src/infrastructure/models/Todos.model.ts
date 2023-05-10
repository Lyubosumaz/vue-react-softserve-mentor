import { z } from 'zod'

export class TodosModel {
  id: string
  date: number
  content: string
  done: boolean
}

export const TodosModelSchema: z.ZodSchema<TodosModel> = z.object({
  id: z.string(),
  date: z.number(),
  content: z.string(),
  done: z.boolean(),
})
