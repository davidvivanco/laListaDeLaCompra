import { IonContent, IonItemDivider, IonList } from '@ionic/react';
import React, { useContext } from 'react';
import ItemList from './Item';
import { ShoppinListContext } from '../../../../../context/shoppingList/ShoppingListProvider';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ListItems: React.FC = () => {
  const { shoppingList } = useContext(ShoppinListContext);

  return (
    <IonContent className="background-medium ion-padding">
      <IonList className="background-medium">
        <div className="bold" style={{ marginBottom: '10px' }}>
          Pendientes
        </div>
        {shoppingList?.items
          ?.filter((item) => !item.done)
          .map((item) => (
            <ItemList item={item} key={item.id}></ItemList>
          ))}
        <div
          className="bold"
          style={{ marginBottom: '10px', marginTop: '20px' }}
        >
          Completados
        </div>
        {shoppingList?.items
          ?.filter((item) => item.done)
          .map((item) => (
            <ItemList
              slidingDisabled={true}
              item={item}
              key={item.id}
            ></ItemList>
          ))}
        {shoppingList?.items?.some((i) => i.done) && (
          <div className="flex jc-c mt-m">
            <Button className="delete-btn" size="large">
              Eliminar completados <DeleteIcon></DeleteIcon>
            </Button>
          </div>
        )}
      </IonList>
    </IonContent>
  );
};

export default ListItems;
