import React, { useMemo } from 'react';
import { format, fromUnixTime } from 'date-fns';

import { Container, Indicator, Separator } from './styles';

interface StartChatSeparatorProps {
  date: number;
}

const StartChatSeparator: React.FC<StartChatSeparatorProps> = ({ date }) => {
  const formatedDate = useMemo(() => format(fromUnixTime(date), 'dd/MM/yyyy'), [
    date,
  ]);

  return (
    <Container>
      <Indicator>
        Atendimento iniciado em <strong>{formatedDate}</strong>
      </Indicator>
      <Separator />
    </Container>
  );
};

export default StartChatSeparator;
