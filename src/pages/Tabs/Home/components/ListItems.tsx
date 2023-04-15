import { IonCheckbox, IonContent, IonItem, IonItemDivider, IonLabel, IonList } from '@ionic/react';
import React, { useContext, useState } from 'react';
import { StoreContext } from '../../../../store/StoreProvider';
import List from '@mui/material/List';
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import ItemList from './Item';

const ListItems: React.FC = () => {
    const { store } = useContext(StoreContext);


    return (
        <IonContent>
            <IonList>
                <IonItemDivider>Default Checkbox</IonItemDivider>
                {
                    store?.items?.
                        filter(item => !item.done)
                        .map(item => <ItemList item={item} key={item.id}></ItemList>)
                }
                <IonItemDivider className='mt-m'>Completados</IonItemDivider>
                {
                    store?.items?.
                        filter(item => item.done)
                        .map(item => <ItemList item={item} key={item.id}></ItemList>)
                }
            </IonList>
        </IonContent>
    );
};

export default ListItems;