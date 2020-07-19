export interface ILastConversation {
  channel: number;
  finishedAt: number;
}

export interface IObservation {
  channel: number;
  value: string;
}

export interface ICustomer {
  id: number;
  name: string;
  photo: string;
  company: string;
  lastConversations: ILastConversation[];
  observations: string;
  contacts: IObservation[];
}
