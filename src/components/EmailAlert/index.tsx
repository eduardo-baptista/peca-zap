import React, { useMemo } from 'react';

import { ReactComponent as ArrowSvg } from 'assets/icons/big-arrow.svg';

import SvgContainer from 'components/SvgContainer';
import { Container } from './styles';

interface EmailAlertProps {
  numberOf: number;
}

const EmailAlert: React.FC<EmailAlertProps> = ({ numberOf }) => {
  const showAlert = useMemo(() => numberOf > 0, [numberOf]);

  return (
    <Container>
      {showAlert && (
        <div>
          <span>{numberOf}</span>
          <SvgContainer color="#A7B6C2">
            <ArrowSvg />
          </SvgContainer>
        </div>
      )}
    </Container>
  );
};

export default EmailAlert;
