import { makeAutoObservable } from 'mobx'
import { createGlobalObservable } from 'mobx-vue-lite'
import { signUpRepository } from '@/infrastructure/repositories/SignUp.repository'
import { SignUpViewModel } from '@/infrastructure/view-models/SignUp.view-model'

export class SignUpStore {
  viewModels: SignUpViewModel = {}

  constructor() {
    makeAutoObservable(this)
  }

  async getSignUp() {
    const models = await signUpRepository.get()
    this.viewModels = new SignUpViewModel()
    this.viewModels.id = models.id
    this.viewModels.email = models.email
    this.viewModels.password = models.password
    this.viewModels.name = models.name
    this.viewModels.acceptConditions = models.acceptConditions
  }
}

export const useSignUpStore = createGlobalObservable(() => new SignUpStore())
