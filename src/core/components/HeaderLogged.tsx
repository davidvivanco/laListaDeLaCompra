import { IonAvatar, IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './HeaderLogged.scss';

const HeaderLogged: React.FC = () => {

   
    return (
        <IonHeader
        // className="ion-no-border"
        >
            <IonToolbar>
                <IonButtons>
                    <IonBackButton className='ml-xs' text={''} defaultHref='/' ></IonBackButton>
                </IonButtons>
                <IonTitle>Header Logged</IonTitle>
                <IonAvatar slot='end' className='mr-s mt-2'>
                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
            </IonToolbar>



        </IonHeader>
    );
};

export default HeaderLogged;