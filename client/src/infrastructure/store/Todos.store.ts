import { DocumentData, QuerySnapshot } from 'firebase/firestore'
import { observable, makeObservable, action } from 'mobx'
import { createGlobalObservable } from 'mobx-vue-lite'
import { TodosViewModel } from '@/infrastructure/view-models/Todos.view-model'
import { todosRepository } from '@/infrastructure/repositories/Todos.repository'
import { TodosModel, TodosModelSchema } from '../models/Todos.model'

export class TodosStore {
  viewModels: TodosViewModel[] = []

  constructor() {
    makeObservable(this, {
      viewModels: observable,
      filterQuery: action.bound,
      getTodos: action.bound,
    })
  }

  addTodo(content: string) {
    todosRepository.addTodoFB(content)
  }

  getTodos() {
    todosRepository.getTodosFB(this.filterQuery)
  }

  completeTodo(todoId: string) {
    todosRepository.completeTodoFB(todoId)
  }

  deleteTodo(todoId: string) {
    todosRepository.deleteTodoFB(todoId)
  }

  filterQuery(querySnapshot: QuerySnapshot<DocumentData>): void {
    const fbTodos: TodosModel[] = []
    querySnapshot.forEach((todo) => {
      const newTodo = {
        id: todo.id,
        date: todo.data().date,
        content: todo.data().content,
        done: todo.data().done,
      }
      const valid = TodosModelSchema.parse(newTodo)
      fbTodos.push(new TodosViewModel(valid.id, valid.date, valid.content, valid.done))
    })
    this.viewModels = fbTodos
  }
}

export const useTodosStore = createGlobalObservable(() => new TodosStore())
