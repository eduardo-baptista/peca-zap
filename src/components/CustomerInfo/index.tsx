import React from 'react';

import Picture from 'components/Picture';
import PersonInfo from 'components/PersonInfo';
import { Container, Alert } from './styles';

interface CustomerInfoProps {
  id: number;
  name: string;
  photo: string;
  company: string;
  onClick(): void;
  alerts?: number;
  isActive?: boolean;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({
  name,
  photo,
  company,
  onClick,
  alerts,
  isActive = false,
}) => {
  if (alerts === 0) alerts = undefined;

  return (
    <Container type="button" isActive={isActive} onClick={onClick}>
      <Picture size={48} src={photo} alt={name} />
      <PersonInfo name={name} company={company} />
      {alerts && <Alert>{alerts}</Alert>}
    </Container>
  );
};

export default CustomerInfo;
