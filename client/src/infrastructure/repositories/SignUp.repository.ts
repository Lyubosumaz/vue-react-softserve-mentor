import { SignUpModel } from '@/infrastructure/models/SignUp.model'

export class SignUpRepository {
  async get() {
    const response = await fetch('http://localhost:4011/user/sign-up')
    const data = await response.json()
    const {
      id,
      email,
      password,
      name,
      acceptConditions,
    } = data.signUpEntity
    return new SignUpModel(id, email, password, name, acceptConditions)
  }
}

export const signUpRepository = new SignUpRepository()
