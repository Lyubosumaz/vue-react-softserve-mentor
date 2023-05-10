import { makeAutoObservable } from 'mobx'

export class TodosViewModel {
  constructor(
    public id: string,
    public date: number,
    public content: string,
    public done: boolean,
  ) {
    makeAutoObservable(this)
  }
}
