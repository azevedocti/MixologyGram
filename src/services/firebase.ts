import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import {getAuth} from 'firebase/auth';

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
  getDoc,
  onSnapshot,
} from 'firebase/firestore';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword,} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAm53rx0MyMYOVArYis64gzE9FUPPCSxXs",
  authDomain: "mixology-data.firebaseapp.com",
  projectId: "mixology-data",
  storageBucket: "mixology-data.appspot.com",
  messagingSenderId: "529621823588",
  appId: "1:529621823588:web:aba9db5f1bc1b5ab002f71",
  measurementId: "G-1EXX8MTJNJ"
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

export async function getItem(colecao: string, document: string) {
  const docRef = doc(db, colecao, document);
  return await getDoc(docRef);
}



export type filter = {
  field: string;
  operation: string;
  value: unknown;
};

export async function selectAllItems(colecao: string, filter?: filter[]) {
  const wh : any = filter?.map((f:any) => where(f.field, f.operation, f.value));
  const q : any = query(collection(db, colecao), wh);
  console.log('query', wh);
  const querySnapshot = await getDocs(q);
  const queryResult = [];
  querySnapshot.forEach((doc:any) => {
    queryResult.push({
      id: doc.id,
      ...doc?.data(),
    });
  });
  return queryResult;
}
export const storage = getStorage(app);
