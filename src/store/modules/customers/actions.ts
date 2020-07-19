import { ICustomer } from 'typings/ICustomer';
import {
  customersActionTypes,
  LOAD_DATA_REQUEST,
  LOAD_DATA_SUCCESS,
  CHANGE_SELECTED_ID,
} from './types';

export function loadDataRequest(): customersActionTypes {
  return {
    type: LOAD_DATA_REQUEST,
  };
}

export function loadDataSuccess(customers: ICustomer[]): customersActionTypes {
  return {
    type: LOAD_DATA_SUCCESS,
    payload: {
      customers,
    },
  };
}

export function changeSelectedId(id: number): customersActionTypes {
  return {
    type: CHANGE_SELECTED_ID,
    payload: {
      id,
    },
  };
}
