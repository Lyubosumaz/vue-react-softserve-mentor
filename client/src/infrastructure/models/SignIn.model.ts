import { z } from 'zod'

export class SignInModel {
  id: number
  email: string
  password: string
  keepMeSignedIn: boolean

  constructor(id: number, userName: string, email: string, acceptConditions: boolean) {
    this.id = id
    this.password = userName
    this.email = email
    this.keepMeSignedIn = acceptConditions
  }
}

export const SignInModelSchema: z.ZodSchema<SignInModel> = z.object({
  id: z.number().int(),
  email: z.string(),
  password: z.string(),
  keepMeSignedIn: z.boolean(),
})
