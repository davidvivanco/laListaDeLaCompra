import { IonContent, IonModal } from '@ionic/react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { AuthContext } from '../../../context/auth/AuthProvider';
import { LoadingContext } from '../../../context/loading/LoadingProvider';
import './SignInModal.scss';
import { useForm } from 'react-hook-form';

const SignInModal: React.FC<{
  isOpen: boolean;
  setLoginIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSignInIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isOpen, setSignInIsOpen, setLoginIsOpen }) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const { setLoading } = useContext(LoadingContext);
  const { signIn } = useContext(AuthContext);

  const onInputChange = () => {
    console.log(getValues());
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
    const { password, username, email, confirmPassword } = getValues();
    setLoading(true);
    signIn(email, password, setLoading);
  };

  return (
    <IonModal
      isOpen={isOpen}
      className="signin-modal"
      ref={modal}
      trigger="open--signin-modal"
      initialBreakpoint={0.74}
      breakpoints={[0.74]}
    >
      <IonContent className="ion-padding">
        <form className="ion-padding" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            onKeyDown={(event) => {
              onInputChange();
            }}
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
            {...register('confirmPassword', { required: true })}
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
              disabled={!isValid}
              className="signin-btn"
              style={{ opacity: !isValid ? '60%' : '100%' }}
              size="large"
              type="submit"
              fullWidth
            >
              Sign In
            </Button>
            <div
              onClick={() => {
                setSignInIsOpen(false);
                setLoginIsOpen(true);
              }}
              className="login-link flex jc-c ai-c"
            >
              Ya tengo cuenta
            </div>
          </div>
        </form>
      </IonContent>
    </IonModal>
  );
};

export default SignInModal;
