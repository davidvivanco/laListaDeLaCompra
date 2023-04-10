import { IonContent, IonPage } from '@ionic/react';
import React, { useContext } from 'react';
import { StoreContext } from '../../../store/StoreProvider';

const ListItems: React.FC = () => {
    const { store } = useContext(StoreContext);

    return (
        <IonContent>
            {store?.items?.map((item, i) => <p key={i}>{JSON.stringify(item)}</p>)}
        </IonContent>
    );
};

export default ListItems;