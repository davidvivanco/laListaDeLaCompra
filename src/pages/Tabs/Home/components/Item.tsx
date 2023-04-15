import { IonCheckbox, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext, useState } from 'react';
import { StoreContext } from '../../../../store/StoreProvider';
import { Item, Store } from '../../../../store/model';
import { clone } from '../../../../core/utils/utils';
import { updateStore } from '../../../../core/utils/store';

const ItemList: React.FC<{ item: Item }> = ({ item }) => {
    const { store, dispatchStore } = useContext(StoreContext);
    const [checked, setChecked] = useState(item.checked);

    const onIonChangeHandler = (checked: boolean): void => {
        setChecked(checked);
        const storeClone = clone<Partial<Store>>(store);
        const index = store.items?.findIndex(ele => ele.id === item.id);
        storeClone.items[index].done = checked;
        storeClone.items[index].checked = checked;
        const items = storeClone.items;
        updateStore(dispatchStore, storeClone);
    }

    return (
        <IonItem lines='none'>
            <IonLabel>{item.name}</IonLabel>
            <IonCheckbox checked={checked} onIonChange={(e) => onIonChangeHandler(e.detail.checked)} />
        </IonItem>
    )
};

export default ItemList;