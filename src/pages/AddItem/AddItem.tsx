import { IonChip, IonContent, IonFooter, IonIcon, IonLabel, IonPage, IonToast } from '@ionic/react';
import React, { useContext, useState } from 'react';
import './AddItem.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { add } from 'ionicons/icons';
import { Divider, InputAdornment, TextField } from '@mui/material';
import { StoreContext } from '../../store/StoreProvider';

let recommendations = [
    'Huevos', 'Leche', 'Fairy',
    'Pan', 'Chocolate', 'Pollo',
    'Pescado', 'Agua', 'Cerveza',
    'Coca Cola', 'Queso', 'Embutido',
    'Detergente', 'Pan Bimbo', 'Pasta de dientes',
    'Gel de ducha', 'Chammpoo', 'Atún',
    'Tomate frito', 'Verduras', 'Lentejas',
    'Macarrones', 'Espaguetis', 'Fruta',
    'Mantequilla', 'Mermelada', 'Yogures',
    'Mozzarella', 'Pasta de dientes', 'Legumbres',
    'Carne picada', 'Salchichas', 'Helado',
    'Lechuga', 'Galletas'
];

const AddItem: React.FC = () => {
    const { dispatchStore } = useContext(StoreContext);
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('false');
    const [name, setInputName] = useState('')

    const handleChangeEvent = (value: string) => setInputName(value)

    const addRecomendation = (value: string) => {
        const index = recommendations.findIndex(ele => ele.toLowerCase() === value?.toLowerCase());
        dispatchStore({ type: 'ADD ITEM', payload: value })
        const message = `${recommendations[index]} ha sido añadido a la lista`
        setMessage(message);
        setIsOpen(true);
        if (index >= 0) recommendations.splice(index, 1);
    }

    const addItem = (name: string) => {
        if (!name) return;
        const message = `${name} ha sido añadido a la lista`;
        setMessage(message);
        setIsOpen(true);
        dispatchStore({ type: 'ADD ITEM', payload: name })
        setInputName('');
    }

    return (
        <IonPage>
            <IonContent className='content-padding-header'>
                <IonToast
                    position='top'
                    isOpen={isOpen}
                    message={message}
                    onDidDismiss={() => setIsOpen(false)}
                    duration={900}
                ></IonToast>

                <div className='content-container ion-padding'>
                    <div className='mt-m mb-s'>Recomendaciones</div>
                    <Divider />
                    <div className='chip-container flex fd-row f-wrap w-100 mt-s'>
                        {recommendations
                            .map((ele, i) => <div
                                onClick={() => addRecomendation(ele)}
                                key={i} className='mt-xs chip' >

                                <IonChip
                                    id={'open-toast' + i}
                                    class='w-90 flex jc-sa'>
                                    <IonLabel>{ele}</IonLabel>
                                    <IonIcon icon={add}></IonIcon>
                                </IonChip>

                            </div>)}
                    </div>
                </div>
            </IonContent>
            <IonFooter className="ion-padding">
                <TextField
                    fullWidth
                    id="outlined-controlled"
                    label="Añade algo"
                    value={name}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment
                                onClick={() => addItem(name)}
                                position="start">
                                <AddCircleIcon
                                    className={name ? '' : 'disabled'}
                                    style={{ fontSize: '30px' }} />
                            </InputAdornment>
                        ),
                    }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeEvent(event.target.value)}
                />
            </IonFooter>
        </IonPage>
    );
};

export default AddItem;