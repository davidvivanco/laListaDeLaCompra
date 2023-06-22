import { IonButton, IonContent, IonFooter, IonIcon, IonPage } from '@ionic/react';
import { useContext, useEffect } from 'react';
import Spinner from '../../../../shared/components/Spinner';
import ListEmpty from './components/ListEmpty';
import ListItems from './components/ListItems';
import HeaderLogged from '../../../../shared/components/HeaderLogged';
import './Home.scss';
import { ShoppinListContext } from '../../../../context/shoppingList/ShoppingListProvider';
import { LoadingContext } from '../../../../context/loading/LoadingProvider';
import { trash } from 'ionicons/icons';
import { shoppingListTypes } from '../../../../shared/models/types';

const Home: React.FC = () => {
  const { shoppingList, setStreamShoppingList, dispatchShoppingList } = useContext(ShoppinListContext);
  const { isLoading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem('user'));
    setStreamShoppingList(setLoading);
  }, [])

  useEffect(() => {
    console.log("HOME ITEMS", shoppingList)
  }, [shoppingList.items])

  const deleteCompletedItems = () => {
    dispatchShoppingList({ type: shoppingListTypes.removeCompleted, payload: null })
  }

  const thereIsCompletedItems = (): boolean => {
    return shoppingList?.items?.some(i => i.done)
  }

  return (
    <IonPage>
      {!isLoading && <HeaderLogged></HeaderLogged>}
      <IonContent className='home-content' fullscreen>
        {
          isLoading
            ? <Spinner></Spinner>
            : shoppingList?.items!.length > 0
              ? <ListItems></ListItems>
              : <ListEmpty></ListEmpty>
        }
      </IonContent>

    </IonPage>
  );
};

export default Home;
