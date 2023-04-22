import { makeAutoObservable } from 'mobx'

export class SignUpViewModel {
  id?: number
  email?: string[]
  password?: string[]
  name?: string[]
  acceptConditions?: boolean

  constructor() {
    makeAutoObservable(this)
  }
}
