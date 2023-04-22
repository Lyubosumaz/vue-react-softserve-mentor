import { makeAutoObservable } from 'mobx'

export class SignInViewModel {
  id?: number
  email?: string
  password?: string
  keepMeSignedIn?: boolean

  constructor() {
    makeAutoObservable(this)
  }

  // TODO update methods:
}
