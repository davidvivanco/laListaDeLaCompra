import { Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import TabsRoutes from './routes/TabsRoutes';
import Login from '../auth/pages/Login/Login';
import { Explore } from '@mui/icons-material';
import ShoppinListProvider from '../context/shoppingList/ShoppingListProvider';
import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthProvider';


const AppRouter: React.FC = () => {
    const { logged } = useContext(AuthContext);

    return (
        <ShoppinListProvider>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/explore">
                        <Explore />
                    </Route>
                    <Route path="/*">
                        {logged
                            ? <TabsRoutes />
                            : <Login />
                        }
                    </Route>
                </IonRouterOutlet>
            </IonReactRouter>
        </ShoppinListProvider>
    )
}

export default AppRouter;

