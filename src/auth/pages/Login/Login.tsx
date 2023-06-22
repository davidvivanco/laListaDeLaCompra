import { IonContent, IonModal, IonPage, useIonRouter } from '@ionic/react';
import React, { useContext, useEffect, useRef } from 'react';
import { Button, TextField, FormHelperText } from '@mui/material';
import Spinner from '../../../shared/components/Spinner';
import { AuthContext } from '../../../context/auth/AuthProvider';
import { LoadingContext } from '../../../context/loading/LoadingProvider';
import './Login.scss';
import { useForm } from 'react-hook-form';
import LoginModal from '../components/LoginModal';

const Login: React.FC = () => {
  const { isLoading, setLoading } = useContext(LoadingContext);
  const { login, isLoggedIn } = useContext(AuthContext);
  const router = useIonRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, touchedFields, errors },
    getValues,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    login('', '', setLoading);
  };

  const onInputChange = () => {
    console.log(control.getFieldState('email'));
  };

  const loginModal = useRef<HTMLIonModalElement>(null);
  const signInModal = useRef<HTMLIonModalElement>(null);

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
                  id="open-modal"
                  className="login-btn"
                  size="large"
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>
                <Button
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
        <LoginModal></LoginModal>
        {/* <IonModal
          className="login-modal"
          ref={loginModal}
          trigger="open-modal"
          initialBreakpoint={0.45}
          breakpoints={[0.45]}
        >
          <IonContent className="ion-padding">
            <form className="ion-padding" onSubmit={handleSubmit(onSubmit)}>
              <TextField
                onKeyDown={(event) => {
                  onInputChange();
                }}
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Email no válido',
                  },
                })}
                sx={{
                  '& label': {
                    '&.Mui-focused': {
                      color: '#e5ae41',
                    },
                  },
                }}
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '1px solid #e5ae41!important',
                    },
                  },
                }}
                margin="dense"
                fullWidth
                label="Email"
                variant="outlined"
              />
              <TextField
                id="email"
                {...register('password', { required: true })}
                type="password"
                sx={{
                  '& label': {
                    '&.Mui-focused': {
                      color: '#e5ae41',
                    },
                  },
                }}
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '1px solid #e5ae41!important',
                    },
                  },
                }}
                margin="dense"
                fullWidth
                label="Outlined"
                variant="outlined"
              />
              <div className="mt-m flex jc-c fd-col">
                <Button
                  className="login-btn"
                  size="large"
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>
                <div className="signin-link flex jc-c ai-c">
                  No tengo cuenta
                </div>
              </div>
            </form>
          </IonContent>
        </IonModal> */}
        <IonModal
          className="signin-modal"
          ref={signInModal}
          trigger="open--signin-modal"
          initialBreakpoint={0.74}
          breakpoints={[0.74]}
        >
          <IonContent className="ion-padding">
            <form className="ion-padding" onSubmit={handleSubmit(onSubmit)}>
              <TextField
                sx={{
                  '& label': {
                    '&.Mui-focused': {
                      color: '#d35c26',
                    },
                  },
                }}
                id="username"
                {...register('username', { required: true })}
                type="text"
                margin="dense"
                fullWidth
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '1px solid #d35c26!important',
                    },
                  },
                }}
                label="Username"
                variant="outlined"
              />

              <TextField
                onKeyDown={(event) => {
                  onInputChange();
                }}
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Email no válido',
                  },
                })}
                sx={{
                  '& label': {
                    '&.Mui-focused': {
                      color: '#d35c26',
                    },
                  },
                }}
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '1px solid #d35c26!important',
                    },
                  },
                }}
                margin="dense"
                fullWidth
                label="Email"
                variant="outlined"
              />
              {/* {errors.email?.type === 'pattern' &&
                control.getFieldState('email')?.isTouched && (
                  <FormHelperText className="error-txt">
                    Email inválido
                  </FormHelperText>
                )}
              {errors.email?.type === 'required' && (
                <FormHelperText className="error-txt">
                  Campo requerido
                </FormHelperText>
              )} */}

              <TextField
                id="email"
                {...register('password', { required: true })}
                type="password"
                margin="dense"
                fullWidth
                label="Contraseña"
                variant="outlined"
                sx={{
                  '& label': {
                    '&.Mui-focused': {
                      color: '#d35c26',
                    },
                  },
                }}
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '1px solid #d35c26!important',
                    },
                  },
                }}
              />

              <TextField
                id="confirm-password"
                {...register('password', { required: true })}
                type="password"
                margin="dense"
                fullWidth
                sx={{
                  '& label': {
                    '&.Mui-focused': {
                      color: '#d35c26',
                    },
                  },
                }}
                label="Repite contraseña"
                variant="outlined"
                InputLabelProps={{}}
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '1px solid #d35c26!important',
                    },
                  },
                }}
              />
              <div className="mt-m flex jc-c fd-col">
                <Button
                  className="signin-btn"
                  size="large"
                  type="submit"
                  fullWidth
                >
                  Sign In
                </Button>
                <div className="login-link flex jc-c ai-c">Ya tengo cuenta</div>
              </div>
            </form>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Login;
