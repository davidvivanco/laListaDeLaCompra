import { IonContent, IonHeader, IonPage } from '@ionic/react';
import './Home.scss';
import ListEmpty from './components/ListEmpty';
import { StoreContext } from '../../store/StoreProvider';
import { useContext, useEffect } from 'react';
import Spinner from '../../core/components/Spinner';
import ListItems from './components/ListItems';

const Home: React.FC = () => {
  const { store, dispatchStore } = useContext(StoreContext);
  
  useEffect(() => {
    //llamada a firebase
    setTimeout(() => {
      dispatchStore({
        type: 'UPDATE STORE', payload: {
          ...store,
          loading: false,
          items: []
        }
      })
    }, 2000);
  }, [])

  return (
    <IonPage>
      <IonContent className='content-padding-header' fullscreen>
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
