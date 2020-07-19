import { IChat } from 'typings/IChat';
import {
  LOAD_DATA_REQUEST,
  LOAD_DATA_SUCCESS,
  chatsActionTypes,
} from './types';

export function loadDataRequest(): chatsActionTypes {
  return {
    type: LOAD_DATA_REQUEST,
  };
}

export function loadDataSuccess(chats: IChat[]): chatsActionTypes {
  return {
    type: LOAD_DATA_SUCCESS,
    payload: {
      chats,
    },
  };
}
