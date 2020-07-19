import {
  customersActionTypes,
  LOAD_DATA_REQUEST,
  LOAD_DATA_SUCCESS,
  CHANGE_SELECTED_ID,
  ADD_MESSAGE_TO_SEE,
  Customer,
} from './types';

export function loadDataRequest(): customersActionTypes {
  return {
    type: LOAD_DATA_REQUEST,
  };
}

export function loadDataSuccess(customers: Customer[]): customersActionTypes {
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

export function addMessageToSee(
  chat: number,
  customerId: number,
  numberOfMessages: number
): customersActionTypes {
  return {
    type: ADD_MESSAGE_TO_SEE,
    payload: {
      chat,
      customerId,
      numberOfMessages,
    },
  };
}
