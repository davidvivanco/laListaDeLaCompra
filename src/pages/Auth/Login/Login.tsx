import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, UseIonRouterResult, useIonRouter } from '@ionic/react';
import React, { useContext, useEffect } from 'react';
import { auth, getUserByUid, loginWithEmailAndPassword } from '../../../../firebase';
import { StoreContext } from '../../../store/StoreProvider';
import { Button } from '@mui/material';
import { isLoggedHandler } from '../../../core/utils/user';
import { UserCredential } from 'firebase/auth';
import Spinner from '../../../core/components/Spinner';


const Login: React.FC = () => {
    const { store, dispatchStore } = useContext(StoreContext);
    const router = useIonRouter();

    const login = async () => {
        dispatchStore({ type: 'SET LOADING', payload: true })
        const data: UserCredential = await loginWithEmailAndPassword();
        await getUser(data.user?.uid);
        router.push("/tabs", "root");
    }

    const getUser = async (uid: string) => {
        await getUserByUid(
            uid,
            dispatchStore,
            { ...store, isLogged: true, loading: false }
        );
    }


    useEffect(() => {
        setTimeout(() => {
            const isLogged = auth?.currentUser ? true : false;
            const uid = auth.currentUser?.uid as string;
            isLoggedHandler(isLogged, router, uid, getUser);
        }, 1500);
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Page Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {store.loading
                    ? <Spinner></Spinner>
                    : < div className='mt-xl flex jc-c'>
                        <Button
                            onClick={login}
                            fullWidth variant="contained">Login</Button>
                    </div>
                }
            </IonContent>
        </IonPage >
    );
};

export default Login;