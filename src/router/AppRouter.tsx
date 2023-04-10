import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import HeaderLoggedRoutes from './routes/HeaderLoggedRoutes';


const AppRouter: React.FC = () => {
    return (
            <IonReactRouter>
                <HeaderLoggedRoutes></HeaderLoggedRoutes>
                {/* <IonRouterOutlet>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/add-item">
                        <AddItem />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                </IonRouterOutlet> */}
            </IonReactRouter>
    )
}

export default AppRouter;

