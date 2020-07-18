import React, { useMemo } from 'react';

import { Container } from './styles';

interface PersonInfoProps {
  name: string;
  company: string;
}

const PersonInfo: React.FC<PersonInfoProps> = ({ name, company }) => {
  const upperCompany = useMemo(() => company.toUpperCase(), [company]);

  return (
    <Container>
      <h2>{name}</h2>
      <span>{upperCompany}</span>
    </Container>
  );
};

export default PersonInfo;
