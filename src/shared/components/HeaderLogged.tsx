import { IonAvatar, IonContent, IonHeader, IonPopover, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React, { useContext } from 'react';
import './HeaderLogged.scss';
import { AuthContext } from '../../context/auth/AuthProvider';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const HeaderLogged: React.FC = () => {
    const { user } = useContext(AuthContext);
    const { logout } = useContext(AuthContext);
    const router = useIonRouter();

    return (
        <IonHeader
            className="ion-no-border"
        >
            <IonToolbar>
                {user &&
                    <>
                        <div className='username'>{user?.username}</div>
                        <IonAvatar id="open-popover" slot='end' className='mr-s mt-2'>
                            {user?.photoUrl && <img alt="Image profile" src={user?.photoUrl} />}
                        </IonAvatar>
                        <IonPopover keepContentsMounted={true} trigger="open-popover">
                            <IonContent>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton onClick={() => logout(router)}>
                                            <ListItemIcon>
                                                <LogoutIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Log out" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </IonContent>
                        </IonPopover>
                    </>
                }
            </IonToolbar>
        </IonHeader>
    );
};

export default HeaderLogged;