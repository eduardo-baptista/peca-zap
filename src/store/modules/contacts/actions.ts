import { IContact } from 'typings/IContact';
import {
  LOAD_DATA_REQUEST,
  LOAD_DATA_SUCCESS,
  contactsActionTypes,
} from './types';

export function loadDataRequest(): contactsActionTypes {
  return {
    type: LOAD_DATA_REQUEST,
  };
}

export function loadDataSuccess(contacts: IContact[]): contactsActionTypes {
  return {
    type: LOAD_DATA_SUCCESS,
    payload: {
      contacts,
    },
  };
}
