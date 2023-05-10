import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAfMiInjYQGPdud1PFOxaoPFA3qeF-5-_8',
  authDomain: 'vue-softserve-mentor.firebaseapp.com',
  projectId: 'vue-softserve-mentor',
  storageBucket: 'vue-softserve-mentor.appspot.com',
  messagingSenderId: '184814893910',
  appId: '1:184814893910:web:c21b0c3466f48061ce74f7',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
