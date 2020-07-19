import { IChat } from 'typings/IChat';

export const LOAD_DATA_REQUEST = '@chats/LOAD_DATA_REQUEST';
export const LOAD_DATA_SUCCESS = '@chats/LOAD_DATA_SUCCESS';

export interface loadDataRequestAction {
  type: typeof LOAD_DATA_REQUEST;
}

export interface loadDataSuccessAction {
  type: typeof LOAD_DATA_SUCCESS;
  payload: {
    chats: IChat[];
  };
}

export interface chatsState {
  chats: IChat[];
}

export type chatsActionTypes = loadDataRequestAction | loadDataSuccessAction;
