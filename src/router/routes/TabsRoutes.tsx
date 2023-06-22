import { Redirect, Route } from 'react-router-dom';
import {
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  useIonRouter,
} from '@ionic/react';
import Home from '../../private/pages/Tabs/Home/Home';
import AddItem from '../../private/pages/Tabs/AddItem/AddItem';
import ChecklistIcon from '@mui/icons-material/Checklist';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/auth/AuthProvider';
import { ShoppinListContext } from '../../context/shoppingList/ShoppingListProvider';
import { App } from '@capacitor/app';

const TabsRoutes: React.FC = () => {
  const [tabActive, setTabActive] = useState<{
    home?: boolean;
    addItem?: boolean;
    explore?: boolean;
  }>({ home: true });

  const router = useIonRouter();
  const { isLoggedIn } = useContext(AuthContext);
  const { shoppingList, updateShoppingListInFirestore } =
    useContext(ShoppinListContext);

  useEffect(() => {
    console.log('useEffect tabs');
    isLoggedIn(router);
  }, []);

  useEffect(() => {}, [shoppingList]);

  const onIonTabsWillChangeHandler = async (tab: 'home' | 'add-item') => {
    if (tab === 'home' && shoppingList.needsUpdate) {
      await updateShoppingListInFirestore(shoppingList);
    }
  };
  const setAppStateChangeListener = () => {
    App.addListener('appStateChange', ({ isActive }) => {
      if (!isActive) {
        console.log('background');
        // App went to background
        // Save anything you fear might be lost
      } else {
        console.log('foreground');

        // App went to foreground
        // restart things like sound playing
      }
    });
  };

  return (
    <>
      <IonTabs
        onIonTabsWillChange={(e: CustomEvent) =>
          onIonTabsWillChangeHandler(e.detail.tab)
        }
      >
        <IonRouterOutlet>
          <Route exact path="/tabs/home">
            <Home />
          </Route>
          <Route exact path="/tabs/add-item">
            <AddItem />
          </Route>
          <Route exact path="/tabs">
            <Redirect to="/tabs/home" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom" style={{ background: 'white' }}>
          <IonTabButton
            onClick={() => setTabActive({ home: true })}
            tab="home"
            href="/tabs/home"
          >
            <ChecklistIcon
              style={{ color: tabActive.home ? '#88ba89' : '#cdd7d6' }}
              fontSize="large"
            ></ChecklistIcon>
          </IonTabButton>

          <IonTabButton
            onClick={() => setTabActive({ addItem: true })}
            tab="add-item"
            href="/tabs/add-item"
          >
            <AddCircleIcon
              style={{ color: tabActive.addItem ? '#88ba89' : '#cdd7d6' }}
              fontSize="large"
            ></AddCircleIcon>
          </IonTabButton>
          {/* 
                    <IonTabButton onClick={() => setTabActive({ explore: true })} tab="explore" href="/explore">
                        <ExploreIcon color={tabActive.explore ? 'primary' : 'action'} fontSize='large'></ExploreIcon>
                    </IonTabButton> */}
        </IonTabBar>
      </IonTabs>
    </>
  );
};

export default TabsRoutes;
