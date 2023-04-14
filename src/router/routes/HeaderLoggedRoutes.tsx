import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';

import Home from '../../pages/Home/Home';
import AddItem from '../../pages/AddItem/AddItem';
import HeaderLogged from '../../core/components/HeaderLogged';
import ChecklistIcon from '@mui/icons-material/Checklist';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import { useState } from 'react';
import Explore from '../../pages/Explore/Explore';

const HeaderLoggedRoutes: React.FC = () => {
    const [tabActive, setTabActive] = useState<{
        home?: boolean,
        addItem?: boolean,
        explore?: boolean
    }>({ home: true });

    return (
        <>

            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/tabs/home">
                        <Home />
                    </Route>
                    <Route exact path="/tabs/add-item">
                        <AddItem />
                    </Route>
                    <Route exact path="/explore">
                        {/* <Explore /> */}
                        <AddItem />
                    </Route>
                    <Route exact path="/tabs">
                        <Redirect to="/tabs/home" />
                    </Route>
                </IonRouterOutlet>

                <IonTabBar slot="bottom"
                    style={{ background: 'white' }}>
                    <IonTabButton
                        onClick={() => setTabActive({ home: true })} tab="home" href="/tabs/home">
                        <ChecklistIcon color={tabActive.home ? 'primary' : 'action'}
                            fontSize='large'></ChecklistIcon>
                    </IonTabButton>

                    <IonTabButton onClick={() => setTabActive({ addItem: true })} tab="add-item" href="/tabs/add-item">
                        <AddCircleIcon color={tabActive.addItem ? 'primary' : 'action'} fontSize='large'></AddCircleIcon>
                    </IonTabButton>

                    <IonTabButton onClick={() => setTabActive({ explore: true })} tab="explore" href="/explore2">
                        <ExploreIcon color={tabActive.explore ? 'primary' : 'action'} fontSize='large'></ExploreIcon>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </>

    )
}

export default HeaderLoggedRoutes;

