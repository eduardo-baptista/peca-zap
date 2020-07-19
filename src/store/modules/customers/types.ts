import { ICustomer } from 'typings/ICustomer';

export const LOAD_DATA_REQUEST = '@customers/LOAD_DATA_REQUEST';
export const LOAD_DATA_SUCCESS = '@customers/LOAD_DATA_SUCCESS';
export const CHANGE_SELECTED_ID = '@customers/CHANGE_SELECTED_ID';
export const ADD_MESSAGE_TO_SEE = '@customers/ADD_MESSAGE_TO_SEE';

export interface Customer extends ICustomer {
  messages: {
    [key: number]: number;
  };
  totalMessages: number;
}

export interface loadDataRequestAction {
  type: typeof LOAD_DATA_REQUEST;
}

export interface loadDataSuccessAction {
  type: typeof LOAD_DATA_SUCCESS;
  payload: {
    customers: Customer[];
  };
}

export interface changeSelectedIdAction {
  type: typeof CHANGE_SELECTED_ID;
  payload: {
    id: number;
  };
}

export interface addMessageToSeeAction {
  type: typeof ADD_MESSAGE_TO_SEE;
  payload: {
    chat: number;
    customerId: number;
    numberOfMessages: number;
  };
}

export interface customersState {
  selectedId: number | null;
  loading: boolean;
  customers: Customer[];
}

export type customersActionTypes =
  | loadDataRequestAction
  | loadDataSuccessAction
  | changeSelectedIdAction
  | addMessageToSeeAction;
