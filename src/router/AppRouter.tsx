import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import HeaderLoggedRoutes from './routes/HeaderLoggedRoutes';

import Explore from '../pages/Explore/Explore';
import HeaderLogged from '../core/components/HeaderLogged';


const AppRouter: React.FC = () => {
    return (

        <IonReactRouter>
            <IonRouterOutlet>
                <Route exact path="/explore2">
                    <Explore />
                </Route>
                <Route path="/tabs">
                    <HeaderLoggedRoutes />
                </Route>
                <Route exact path="/">
                    <Redirect to="/tabs" />
                </Route>
            </IonRouterOutlet>
        </IonReactRouter>

    )
}

export default AppRouter;

