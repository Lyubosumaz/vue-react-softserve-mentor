export class SignUpModel {
  id: number
  email: string[]
  password: string[]
  name: string[]
  acceptConditions: boolean

  constructor(
    id: number,
    email: string[],
    password: string[],
    name: string[],
    acceptConditions: boolean,
  ) {
    this.id = id
    this.email = email
    this.password = password
    this.name = name
    this.acceptConditions = acceptConditions
  }
}
