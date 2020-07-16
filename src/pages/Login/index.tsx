import React from 'react';
import { Helmet } from 'react-helmet';

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

const Login: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>peçaZap - Login</title>
      </Helmet>
      <Form>
        <img src={logo} alt="peçaZap" />
        <IconsRow>
          <EmailIcon />
          <SkypeIcon />
          <PhoneIcon />
          <WebchatIcon />
          <WhatsappIcon />
        </IconsRow>
        <Input icon={UserIcon} placeholder="Usuário" />
        <Input icon={PasswordIcon} placeholder="Senha" type="password" />
        <ConfirmButton type="submit">
          ENTRAR
          <ArrowIcon />
        </ConfirmButton>
        <ForgotPasswordLink href="/">Esqueceu a senha?</ForgotPasswordLink>
      </Form>
    </>
  );
};

export default Login;
