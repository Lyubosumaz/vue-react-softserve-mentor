import { SignInModelSchema } from '@/infrastructure/models/SignIn.model'
import { USER_SIGN_IN } from '@/global/constants'

export class SignInRepository {
  async get() {
    const response = await fetch(USER_SIGN_IN)
    const data = await response.json()
    return SignInModelSchema.parse(data.signInEntity)
  }
}

export const signInRepository = new SignInRepository()
