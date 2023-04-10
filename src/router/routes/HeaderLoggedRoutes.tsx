import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from '../../pages/Home/Home';
import AddItem from '../../pages/AddItem/AddItem';
import HeaderLogged from '../../core/components/HeaderLogged';


const HeaderLoggedRoutes: React.FC = () => {
    return (
        <>
            <HeaderLogged></HeaderLogged>
            <IonRouterOutlet>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/add-item">
                    <AddItem />
                </Route>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
            </IonRouterOutlet>
        </>

    )
}

export default HeaderLoggedRoutes;

