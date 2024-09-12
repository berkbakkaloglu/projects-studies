
import { initializeApp } from "firebase/app"
import { getFirestore, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCHJc5OWjMO93fw5_B92r7uOTlCvRjxAgo",
  authDomain: "notes-app-8529a.firebaseapp.com",
  projectId: "notes-app-8529a",
  storageBucket: "notes-app-8529a.appspot.com",
  messagingSenderId: "690994198339",
  appId: "1:690994198339:web:f0d429052b42e71bc961f6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")