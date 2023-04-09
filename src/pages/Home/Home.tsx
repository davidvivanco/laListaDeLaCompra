import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.scss';
import ListEmpty from './components/ListEmpty';

const Home: React.FC = () => {
  let state = {}


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ListEmpty></ListEmpty>
      </IonContent>
    </IonPage>
  );
};

export default Home;
