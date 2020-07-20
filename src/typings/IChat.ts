interface IMessage {
  seen: boolean;
  timestamp: number;
  body: string;
  type: 'incoming' | 'outgoing';
}

export interface IChat {
  id: number;
  customer: number;
  channel: number;
  subject?: string;
  start: number;
  messages: IMessage[];
}
