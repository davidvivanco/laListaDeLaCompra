import { IonContent, IonPage, useIonRouter } from '@ionic/react';
import { StoreContext } from '../../../store/StoreProvider';
import { useContext, useEffect } from 'react';
import { auth, getUserByUid } from '../../../../firebase';
import Spinner from '../../../core/components/Spinner';
import ListEmpty from './components/ListEmpty';
import ListItems from './components/ListItems';
import HeaderLogged from '../../../core/components/HeaderLogged';
import './Home.scss';

const Home: React.FC = () => {
  const { store, dispatchStore } = useContext(StoreContext);
  const router = useIonRouter();

  const getUser = async (uid: string) => {
    await getUserByUid(
      uid,
      dispatchStore,
      { ...store, isLogged: true, loading: false }
    );
  }

  useEffect(() => {
    console.log("useEffect home")
    dispatchStore({ type: 'SET LOADING', payload: true })
    setTimeout(() => {
      dispatchStore({
        type: 'UPDATE STORE',
        payload: {
          ...store,
          loading: false,
          items: []
        }
      })
    }, 2000);
  }, [])

  useEffect(() => {
    setTimeout(async () => {
      const isLogged = auth?.currentUser ? true : false;
      if (!isLogged) {
        router.push("/login", "root");
        return;
      }
      const uid = auth?.currentUser?.uid as string;
      await getUser(uid);
    }, 1000);
  }, [])


  useEffect(() => {
    console.log("HOME STORE", store)
  }, [store])

  return (
    <IonPage>
      {!store.loading && <HeaderLogged></HeaderLogged>}
      <IonContent class='ion-padding-top mt-l' fullscreen>
        {
          store.loading
            ? <Spinner></Spinner>
            : store?.items!.length > 0
              ? <ListItems></ListItems>
              : <ListEmpty></ListEmpty>
        }
      </IonContent>
    </IonPage>
  );
};

export default Home;
