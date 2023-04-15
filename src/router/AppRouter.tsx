import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, useIonRouter } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Explore from '../pages/Explore/Explore';
import TabsRoutes from './routes/TabsRoutes';
import Login from '../pages/Auth/Login/Login';
import { useEffect } from 'react';


const AppRouter: React.FC = () => {

   

    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/explore">
                    <Explore />
                </Route>
                <Route path="/tabs">
                    <TabsRoutes />
                </Route>
                <Route exact path="/">
                    <Redirect to="/tabs" />
                </Route>
            </IonRouterOutlet>
        </IonReactRouter>
    )
}

export default AppRouter;

