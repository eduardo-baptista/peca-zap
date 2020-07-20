import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { format, fromUnixTime } from 'date-fns';

import { userState } from 'store/modules/user/types';
import { customersState } from 'store/modules/customers/types';

import { ReactComponent as SeenSvg } from 'assets/icons/seen.svg';

import Picture from 'components/Picture';
import { Container, MessageInfo, Body } from './styles';

interface ReduxState {
  user: userState;
  customers: customersState;
}

interface Sender {
  name: string;
  photo: string;
}

interface MessageProps {
  time: number;
  seen: boolean;
  type: 'incoming' | 'outgoing';
  body: string;
  sizePercent?: number;
}

const Message: React.FC<MessageProps> = ({
  time,
  seen,
  type,
  body,
  sizePercent = 100,
}) => {
  const customer = useSelector((state: ReduxState) =>
    state.customers.customers.find(
      (ctm) => ctm.id === state.customers.selectedId
    )
  );

  const user = useSelector((state: ReduxState) => state.user);

  const formatedTime = useMemo(
    () => format(fromUnixTime(time), "- dd/MM/yyyy HH'h'mm"),
    [time]
  );

  const svgColor: string = useMemo(() => (seen ? '#4FC3F7' : '#A7B6C2'), [
    seen,
  ]);

  const isIncoming = useMemo(() => type === 'incoming', [type]);

  const senderPhoto = useMemo(
    () => (isIncoming ? customer?.photo ?? '' : user.photo),
    [customer, isIncoming, user.photo]
  );

  const senderName = useMemo(
    () => (isIncoming ? customer?.name ?? '' : user.name),
    [customer, isIncoming, user.name]
  );

  return (
    <Container isIncoming={isIncoming}>
      <MessageInfo svgColor={svgColor}>
        <Picture size={24} src={senderPhoto} alt={senderName} />
        <span>
          <strong>{senderName}</strong>
          {formatedTime}
        </span>
        <SeenSvg />
      </MessageInfo>
      <Body sizePercent={sizePercent}>{body}</Body>
    </Container>
  );
};

export default Message;
