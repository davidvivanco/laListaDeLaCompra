import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, doc, onSnapshot } from "firebase/firestore";
import { DispatchStoreData, Store } from "./src/store/model";
import { updateStore } from "./src/core/utils/store";

const app = initializeApp({
  apiKey: "AIzaSyDGTmJQOpz7e1FvLFlrTswI4uQbeiNCWFk",
  authDomain: "the-shopping-list-62c9f.firebaseapp.com",
  projectId: "the-shopping-list-62c9f",
  storageBucket: "the-shopping-list-62c9f.appspot.com",
  messagingSenderId: "520637604288",
  appId: "1:520637604288:web:df4097f66fa8b620bae825",
  measurementId: "G-BG3RW7TG9W"
});

const auth = getAuth(app);
const db = getFirestore(app);

const loginWithEmailAndPassword = async (): Promise<UserCredential> => {
  try {
    return await signInWithEmailAndPassword(auth, 'demo@gmail.com', '12345678910');
  } catch (error) {
    return error as any;
  }
}

const addUser = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user", user)
    })
    .catch((error) => {
      console.log("err", error)
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}


const getUserByUid = async (
  uid: string,
  dispatchStore: React.Dispatch<DispatchStoreData>,
  store: Partial<Store>
) => {
  onSnapshot(doc(db, 'users', 'TafLHskgNKha8fSAWjco7rkLnH03'), (doc) => {
    const user = doc.data();
    updateStore(dispatchStore, { ...store, user })
    // dispatchStore({ type: 'UPDATE STORE', payload: { ...store, user } })
    console.log("Current user: ", doc.data());
  });
}


export { addUser, auth, loginWithEmailAndPassword, getUserByUid }