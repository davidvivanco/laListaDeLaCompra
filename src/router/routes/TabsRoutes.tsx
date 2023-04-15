import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, useIonRouter } from '@ionic/react';

import Home from '../../pages/Tabs/Home/Home';
import AddItem from '../../pages/Tabs/AddItem/AddItem';
import ChecklistIcon from '@mui/icons-material/Checklist';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import { useEffect, useState } from 'react';
import { noDirectAccessHandler } from '../../core/utils/nav';

const TabsRoutes: React.FC = () => {
    const [tabActive, setTabActive] = useState<{
        home?: boolean,
        addItem?: boolean,
        explore?: boolean
    }>({ home: true });

    const router = useIonRouter();

    useEffect(() => noDirectAccessHandler(router), [])

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

                    <IonTabButton onClick={() => setTabActive({ explore: true })} tab="explore" href="/explore">
                        <ExploreIcon color={tabActive.explore ? 'primary' : 'action'} fontSize='large'></ExploreIcon>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </>

    )
}

export default TabsRoutes;

