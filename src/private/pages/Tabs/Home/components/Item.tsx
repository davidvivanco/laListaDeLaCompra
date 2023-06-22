import { IonCheckbox, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel } from '@ionic/react';
import React, { useContext, useState } from 'react';
import { clone } from '../../../../../shared/utils';
import { ShoppinListContext } from '../../../../../context/shoppingList/ShoppingListProvider';
import { trash } from 'ionicons/icons';
import { shoppingListTypes } from '../../../../../shared/models/types';
import { Item, ShoppinList } from '../../../../../shared/models/interfaces';

const ItemList: React.FC<{ item: Item, slidingDisabled?: boolean }> = ({ item, slidingDisabled = false }) => {
    const [checked, setChecked] = useState(item.checked);
    const { shoppingList, dispatchShoppingList } = useContext(ShoppinListContext);
    const onIonChangeHandler = (checked: boolean): void => {
        setChecked(checked);
        const shoppingListClone = clone<Partial<ShoppinList>>(shoppingList);
        const index = shoppingList.items?.findIndex(ele => ele.id === item.id);
        shoppingListClone.items[index].done = checked;
        shoppingListClone.items[index].checked = checked;
        dispatchShoppingList({ type: shoppingListTypes.updateShoppingList, payload: { ...shoppingListClone } });
    }

    const onDeleteItem = (id: string) => {
        dispatchShoppingList({ type: shoppingListTypes.deleteItem, payload: id })
    }

    return (
        <IonItemSliding disabled={slidingDisabled}>
            <IonItem lines='none'>
                <IonLabel>{item.name}</IonLabel>
                <IonCheckbox mode='ios' checked={checked} onIonChange={(e) => onIonChangeHandler(e.detail.checked)} />
            </IonItem>
            <IonItemOptions side="start">
                <IonItemOption onClick={() => onDeleteItem(item.id)} color="danger">
                    <IonIcon slot="icon-only" icon={trash}></IonIcon>
                </IonItemOption>
            </IonItemOptions>
            <IonItemOptions side="end">
                <IonItemOption onClick={() => onDeleteItem(item.id)} color="danger">
                    <IonIcon slot="icon-only" icon={trash}></IonIcon>
                </IonItemOption>
            </IonItemOptions>
        </IonItemSliding>
    )
};

export default ItemList;