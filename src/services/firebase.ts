import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import  {getFirestore} from 'firebase/firestore';
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword,} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBd70FZXolbtL3792dfp66gAacn8EwKNc",
  authDomain: "romulo-24096.firebaseapp.com",
  projectId: "romulo-24096",
  storageBucket: "romulo-24096.appspot.com",
  messagingSenderId: "1033042866851",
  appId: "1:1033042866851:web:b7d296f4a631c029620516",
  measurementId: "G-6JLPZEV2VM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);

export function signIn(usuario: string, senha: string) {
  return signInWithEmailAndPassword(auth, usuario, senha);
}

export function CreateUser(usuario: string, senha: string) {
  return createUserWithEmailAndPassword(auth, usuario, senha);
}

export function addItem(colecao: string, document: string, data: unknown) {
  const docRef = doc(db, colecao, document);
  return setDoc(docRef, data);
}

export function updateItem(colecao: string, document: string, data: unknown) {
  const docRef = doc(db, colecao, document);
  return updateDoc(docRef, data);
}

export function deleteItem(colecao: string, document: string) {
  const docRef = doc(db, colecao, document);
  return deleteDoc(docRef);
}
export type filter = {
  field: string;
  operation: string;
  value: unknown;
};

export async function selectAllItems(colecao: string, filter?: filter[]) {
  const wh = filter?.map((f) => where(f.field, f.operation, f.value));
  const q = query(collection(db, colecao), wh);
  console.log('query', wh);
  const querySnapshot = await getDocs(q);
  const queryResult = [];
  querySnapshot.forEach((doc) => {
    queryResult.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return queryResult;
}