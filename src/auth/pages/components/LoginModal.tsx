import { IonContent, IonModal, IonPage, useIonRouter } from '@ionic/react';
import React, { useContext, useEffect, useRef } from 'react';
import { Button, TextField } from '@mui/material';
import { AuthContext } from '../../../context/auth/AuthProvider';
import { LoadingContext } from '../../../context/loading/LoadingProvider';
import './LoginModal.scss';
import { useForm } from 'react-hook-form';

const LoginModal: React.FC<{
  isOpen: boolean;
  setLoginIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSignInIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isOpen, setLoginIsOpen, setSignInIsOpen }) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const { setLoading } = useContext(LoadingContext);
  const { login } = useContext(AuthContext);
  const onInputChange = () => {
    console.log(control.getFieldState('email'));
  };

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
    console.log('submit');
    setSignInIsOpen(false);
    setLoginIsOpen(false);
    setLoading(true);
    login('', '', setLoading);
  };

  return (
    <IonModal
      isOpen={isOpen}
      className="login-modal"
      ref={modal}
      trigger="open-modal"
      initialBreakpoint={0.47}
      breakpoints={[0.47]}
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
            label="Outlined"
            variant="outlined"
          />
          {/* {errors.password?.type === 'required' && (
          <FormHelperText className="error-txt">
            Campo requerido
          </FormHelperText>
        )} */}
          <div className="mt-m flex jc-c fd-col">
            <Button className="login-btn" size="large" type="submit" fullWidth>
              Login
            </Button>
            <div
              onClick={() => {
                setLoginIsOpen(false);
                setSignInIsOpen(true);
              }}
              className="signin-link flex jc-c ai-c"
            >
              No tengo cuenta
            </div>
          </div>
        </form>
      </IonContent>
    </IonModal>
  );
};

export default LoginModal;
