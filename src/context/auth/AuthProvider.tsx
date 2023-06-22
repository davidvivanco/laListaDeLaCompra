import { createContext, useReducer } from 'react';
import { authTypes } from '../../shared/models/types';
import { authReducer } from './AuthReducer';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { UseIonRouterResult } from '@ionic/react';
import { firebaseApp } from '../../../firebase';
import { AuthContextValue } from '../interfaces';


const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user: user,
    }
}

const AuthContext = createContext({} as Partial<AuthContextValue>);

const AuthProvider = ({ children }: any) => {
    const [authState, dispatchLogin] = useReducer(authReducer, {}, init);
    const auth = getAuth(firebaseApp);
    const db = getFirestore(firebaseApp);

    const login = async (
        email: string,
        password: string,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        try {
            const data = await signInWithEmailAndPassword(auth, 'demo@gmail.com', '12345678910');
            const uid = data?.user?.uid;
            const user = await getUserData(uid);
            const action = { type: authTypes.login, payload: user };
            localStorage.setItem('user', JSON.stringify(user));
            dispatchLogin(action);
            setLoading(false);
            console.log("login")

        } catch (error) {
            setLoading(false);
            console.warn('error in signInWithEmailAndPassword ', error);
        }
    }

    const getUserData = async (uid: string) => {
        let user = {}
        const docRef = doc(db, "users", "TafLHskgNKha8fSAWjco7rkLnH03");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            user = docSnap.data();
            console.log("Auth provider: ", docSnap.data());
        }

        return user;
    }

    const logout = (router: UseIonRouterResult) => {
        removeItemFromStorage();
        const action = { type: authTypes.logout };
        dispatchLogin(action);
        router.push("/login", "root");
    }

    const removeItemFromStorage = () => {
        localStorage.removeItem('user');

    }

    const isLoggedIn = (router: UseIonRouterResult) => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            const action = { type: authTypes.login, payload: user };
            dispatchLogin(action);
            router.push("/tabs", "root");
            return;
        }

        router.push("/login", "root");
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login,
            logout,
            isLoggedIn
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext };
export default AuthProvider; 