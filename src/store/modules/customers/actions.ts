import { ICustomer } from 'typings/ICustomer';
import {
  LOAD_DATA_REQUEST,
  LOAD_DATA_SUCCESS,
  customersActionTypes,
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
