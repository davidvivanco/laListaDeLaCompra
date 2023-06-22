import {
  IonContent,
  IonFooter,
  IonIcon,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonToast,
} from '@ionic/react';
import React, { useContext, useState } from 'react';
import './AddItem.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { thumbsUp, timer } from 'ionicons/icons';
import { Divider, InputAdornment, TextField } from '@mui/material';
import { ShoppinListContext } from '../../../../context/shoppingList/ShoppingListProvider';
import { shoppingListTypes } from '../../../../shared/models/types';
import { Item } from '../../../../shared/models/interfaces';
import Recommendations from './components/recommendations';
import { useItem } from '../../../../hooks/useItem';
import SendIcon from '@mui/icons-material/Send';
import HeaderLogged from '../../../../shared/components/HeaderLogged';
import { LoadingContext } from '../../../../context/loading/LoadingProvider';

const AddItem: React.FC = () => {
  const { dispatchShoppingList } = useContext(ShoppinListContext);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('false');
  const [name, setInputName] = useState('');
  const [selectedSegment, setSelectedSegment] = useState('thumbsUp');
  const { itemBuilder } = useItem();
  const { isLoading, setLoading } = useContext(LoadingContext);

  const showToast = (message: string, open: boolean) => {
    setMessage(message);
    setIsOpen(open);
  };

  const handleInputChangeEvent = (value: string) => setInputName(value);
  const handleInputKeyPressEvent = (e: React.KeyboardEvent) => {
    const key = e.key;

    if (key === 'Enter' && name && name !== '') {
      addItem(name);
      return;
    }
  };

  const addItem = (name: string) => {
    if (!name) return;
    const message = `${name} ha sido añadido a la lista`;
    setMessage(message);
    const item: Item = itemBuilder(name);
    setIsOpen(true);
    dispatchShoppingList({ type: shoppingListTypes.addItem, payload: item });
    setInputName('');
  };

  return (
    <IonPage>
      {!isLoading && <HeaderLogged></HeaderLogged>}
      <IonContent className='content'>
        <IonToast
          position="top"
          color="primary"
          isOpen={isOpen}
          message={message}
          onDidDismiss={() => setIsOpen(false)}
          duration={900}
        ></IonToast>

        <div className="content-container ion-padding">
          {selectedSegment === 'thumbsUp' ? (
            <div
              style={{ fontSize: '16px', fontWeight: 'bold' }}
              className="mb-s"
            >
              Recomendaciones
            </div>
          ) : (
            <div
              style={{ fontSize: '16px', fontWeight: 'bold' }}
              className="mb-s"
            >
              Añadidas recientemente
            </div>
          )}

          <IonSegment
            class="mt-m"
            mode="ios"
            onIonChange={(e) => setSelectedSegment(e?.detail?.value)}
            value={selectedSegment}
          >
            <IonSegmentButton value="thumbsUp">
              <IonIcon icon={thumbsUp}></IonIcon>
            </IonSegmentButton>
            <IonSegmentButton value="timer">
              <IonIcon icon={timer}></IonIcon>
            </IonSegmentButton>
          </IonSegment>

          <Recommendations
            selectedSegment={selectedSegment}
            showToast={showToast}
          ></Recommendations>
        </div>
      </IonContent>
      <IonFooter className="ion-padding">
        <TextField
          fullWidth
          id="outlined-controlled"
          label="Añade algo"
          value={name}
          sx={{
            '& label': {
              '&.Mui-focused': {
                color: '#d35c26',
              },
            },
          }}
          InputProps={{
            sx: {
              '&:focus-within fieldset, &:focus-visible fieldset': {
                border: '1px solid #d35c26!important',
              },
            },
            endAdornment: (
              <InputAdornment onClick={() => addItem(name)} position="start">
                <SendIcon
                  style={{
                    fontSize: '30px',
                    color: name ? '#d35c26' : '#cdd7d6',
                  }}
                  className={name ? '' : 'disabled'}
                />
              </InputAdornment>
            ),
          }}
          onKeyDown={(e) => handleInputKeyPressEvent(e)}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChangeEvent(event.target.value)
          }
        />
      </IonFooter>
    </IonPage>
  );
};

export default AddItem;
