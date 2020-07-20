import React from 'react';

import { Container } from './styles';

interface PersonInfoProps {
  name: string;
  company: string;
}

const PersonInfo: React.FC<PersonInfoProps> = ({ name, company }) => {
  return (
    <Container>
      <h2>{name}</h2>
      <span>{company}</span>
    </Container>
  );
};

export default PersonInfo;
