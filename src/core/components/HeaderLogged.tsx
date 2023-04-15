import { IonAvatar, IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext } from 'react';
import './HeaderLogged.scss';
import { StoreContext } from '../../store/StoreProvider';

const HeaderLogged: React.FC = () => {
    const { store } = useContext(StoreContext);


    return (
        <IonHeader
            className="ion-no-border"
        >
            <IonToolbar>
                {/* <IonButtons>
                    <IonBackButton className='ml-xs' text={''} defaultHref='/' ></IonBackButton>
                </IonButtons> */}
                {store?.user &&
                    <>
                        <IonTitle>{store?.user?.username}</IonTitle>
                        <IonAvatar slot='end' className='mr-s'>
                            {store?.user?.photoUrl && <img alt="Image profile" src={store?.user?.photoUrl} />}
                        </IonAvatar>
                    </>
                }

            </IonToolbar>
        </IonHeader>
    );
};

export default HeaderLogged;