import { IContact } from 'typings/IContact';

export const LOAD_DATA_REQUEST = '@contacts/LOAD_DATA_REQUEST';
export const LOAD_DATA_SUCCESS = '@contacts/LOAD_DATA_SUCCESS';

export interface loadDataRequestAction {
  type: typeof LOAD_DATA_REQUEST;
}

export interface loadDataSuccessAction {
  type: typeof LOAD_DATA_SUCCESS;
  payload: {
    contacts: IContact[];
  };
}

export interface contactsState {
  loading: boolean;
  contacts: IContact[];
}

export type contactsActionTypes = loadDataRequestAction | loadDataSuccessAction;
