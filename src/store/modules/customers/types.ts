import { ICustomer } from 'typings/ICustomer';

export const LOAD_DATA_REQUEST = '@customers/LOAD_DATA_REQUEST';
export const LOAD_DATA_SUCCESS = '@customers/LOAD_DATA_SUCCESS';
export const CHANGE_SELECTED_ID = '@customers/CHANGE_SELECTED_ID';

export interface loadDataRequestAction {
  type: typeof LOAD_DATA_REQUEST;
}

export interface loadDataSuccessAction {
  type: typeof LOAD_DATA_SUCCESS;
  payload: {
    customers: ICustomer[];
  };
}

export interface changeSelectedIdAction {
  type: typeof CHANGE_SELECTED_ID;
  payload: {
    id: number;
  };
}

export interface customersState {
  selectedId: number | null;
  loading: boolean;
  customers: ICustomer[];
}

export type customersActionTypes =
  | loadDataRequestAction
  | loadDataSuccessAction
  | changeSelectedIdAction;
