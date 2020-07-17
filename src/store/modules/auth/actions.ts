import {
  SIGN_IN_REQUEST,
  SIGN_IN_FAILURE,
  SIGN_OUT,
  authActionTypes,
  SIGN_IN_SUCCESS,
} from './types';

export function signInRequest(user: string, password: string): authActionTypes {
  return {
    type: SIGN_IN_REQUEST,
    payload: { user, password },
  };
}

export function signInSuccess(): authActionTypes {
  return {
    type: SIGN_IN_SUCCESS,
  };
}

export function signInFailure(): authActionTypes {
  return {
    type: SIGN_IN_FAILURE,
  };
}

export function signOut(): authActionTypes {
  return {
    type: SIGN_OUT,
  };
}
