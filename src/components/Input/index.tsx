import React from 'react';

import { Container } from './styles';

interface Props {
  icon: React.FC;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  return (
    <Container>
      <div>
        <Icon />
      </div>
      <input {...rest} />
    </Container>
  );
};

export default Input;
