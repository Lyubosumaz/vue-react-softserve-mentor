import {
  DocumentData,
  QuerySnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore'
import { db } from '@/firebase/firebase'

export class TodosRepository {
  todosCollectionRef = collection(db, 'todos')
  todosCollectionQuery = query(this.todosCollectionRef, orderBy('date', 'desc'))

  // Create
  addTodoFB(content: string) {
    addDoc(this.todosCollectionRef, {
      date: Date.now(),
      content,
      done: false,
    })
  }

  // Read
  getTodosFB(filterQuery: (querySnapshot: QuerySnapshot<DocumentData>) => void) {
    onSnapshot(this.todosCollectionQuery, (querySnapshot) => filterQuery(querySnapshot))
  }

  // Update
  completeTodoFB(todoId: string) {
    updateDoc(doc(this.todosCollectionRef, todoId), {
      done: true,
    })
  }

  // Delete
  deleteTodoFB(todoId: string) {
    deleteDoc(doc(this.todosCollectionRef, todoId))
  }
}

export const todosRepository = new TodosRepository()
