import React, { useCallback, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';

import { signInRequest } from 'store/modules/auth/actions';

import Input from 'components/Input';

import logo from 'assets/logo.svg';
import { ReactComponent as EmailIcon } from 'assets/icons/email.svg';
import { ReactComponent as SkypeIcon } from 'assets/icons/skype.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/telefone.svg';
import { ReactComponent as WebchatIcon } from 'assets/icons/webchat.svg';
import { ReactComponent as WhatsappIcon } from 'assets/icons/whatsapp.svg';
import { ReactComponent as UserIcon } from 'assets/icons/user.svg';
import { ReactComponent as PasswordIcon } from 'assets/icons/password.svg';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';

import { Form, IconsRow, ConfirmButton, ForgotPasswordLink } from './styles';

interface inputValues {
  user: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState<inputValues>({ user: '', password: '' });

  const isDisabled = useMemo(() => !values.user || !values.password, [values]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    },
    [values]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.stopPropagation();

      const { user, password } = values;

      dispatch(signInRequest(user, password));
    },
    [dispatch, values]
  );

  return (
    <>
      <Helmet>
        <title>peçaZap - Login</title>
      </Helmet>
      <Form onSubmit={handleSubmit}>
        <img src={logo} alt="peçaZap" />
        <IconsRow>
          <EmailIcon />
          <SkypeIcon />
          <PhoneIcon />
          <WebchatIcon />
          <WhatsappIcon />
        </IconsRow>
        <Input
          icon={UserIcon}
          placeholder="Usuário"
          name="user"
          value={values.user}
          onChange={handleChange}
        />
        <Input
          icon={PasswordIcon}
          placeholder="Senha"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <ConfirmButton disabled={isDisabled} type="submit">
          ENTRAR
          <ArrowIcon />
        </ConfirmButton>
        <ForgotPasswordLink href="/">Esqueceu a senha?</ForgotPasswordLink>
      </Form>
    </>
  );
};

export default Login;
