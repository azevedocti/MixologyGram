import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  onSnapshot,
} from 'firebase/firestore';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword,} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwxtyHIGexISVIxKMW2529p1jheJC8kmY",
  authDomain: "mixologygram.firebaseapp.com",
  projectId: "mixologygram",
  storageBucket: "mixologygram.appspot.com",
  messagingSenderId: "855961972215",
  appId: "1:855961972215:web:3dc344f2bd2a90aabd52f2",
  measurementId: "G-P7F1LQC2E0"
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