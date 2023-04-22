import { makeAutoObservable } from 'mobx'
import { createGlobalObservable } from 'mobx-vue-lite'
import { signInRepository } from '@/infrastructure/repositories/SignIn.repository'
import { SignInViewModel } from '@/infrastructure/view-models/SignIn.view-model'

export class SignInStore {
  viewModels: SignInViewModel = {}

  constructor() {
    makeAutoObservable(this)
  }

  async getSignIn() {
    const models = await signInRepository.get()
    this.viewModels = new SignInViewModel()
    this.viewModels.id = models.id
    this.viewModels.email = models.email
    this.viewModels.password = models.password
    this.viewModels.keepMeSignedIn = models.keepMeSignedIn
  }
}

export const useSignInStore = createGlobalObservable(() => new SignInStore())
