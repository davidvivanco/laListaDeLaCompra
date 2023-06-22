import { IonContent, IonPage, useIonRouter } from '@ionic/react';
import React, { useContext, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Spinner from '../../../shared/components/Spinner';
import { AuthContext } from '../../../context/auth/AuthProvider';
import { LoadingContext } from '../../../context/loading/LoadingProvider';
import './Login.scss';
import LoginModal from '../components/LoginModal';
import SignInModal from '../components/SignInModal';

const Login: React.FC = () => {
  const { isLoading } = useContext(LoadingContext);
  const { isLoggedIn } = useContext(AuthContext);
  const router = useIonRouter();
  const [signInIsOpen, setSignInIsOpen] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false);

  useEffect(() => {
    isLoggedIn(router);
  }, []);

  return (
    <IonPage>
      <IonContent>
        {isLoading ? (
          <Spinner></Spinner>
        ) : (
          <>
            <div className="form-wrapper">
              <div className="banner flex fd-col bold">
                <div className="flex jc-c title">LaListaDeLaCompra</div>
                <img src="./assets/images/login-banner.png" alt="" />
              </div>
              <div className="butttons ion-padding">
                <Button
                  onClick={() => {
                    setSignInIsOpen(false);
                    setLoginIsOpen(true);
                  }}
                  id="open-modal"
                  className="login-btn"
                  size="large"
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    setLoginIsOpen(false);
                    setSignInIsOpen(true);
                  }}
                  id="open--signin-modal"
                  className="signin-btn"
                  size="large"
                  type="submit"
                  fullWidth
                >
                  Sign In
                </Button>
              </div>
            </div>
          </>
        )}
        <LoginModal
          isOpen={loginIsOpen}
          setLoginIsOpen={setLoginIsOpen}
          setSignInIsOpen={setSignInIsOpen}
        ></LoginModal>
        <SignInModal
          setLoginIsOpen={setLoginIsOpen}
          setSignInIsOpen={setSignInIsOpen}
          isOpen={signInIsOpen}
        ></SignInModal>
      </IonContent>
    </IonPage>
  );
};

export default Login;
