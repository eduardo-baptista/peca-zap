export const SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST';
export const SIGN_IN_FAILURE = '@auth/SIGN_IN_FAILURE';
export const SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS';
export const SIGN_OUT = '@auth/SIGN_OUT';

interface signInRequestAction {
  type: typeof SIGN_IN_REQUEST;
  payload: {
    user: string;
    password: string;
  };
}

interface signInSuccessAction {
  type: typeof SIGN_IN_SUCCESS;
}

interface signInFailureAction {
  type: typeof SIGN_IN_FAILURE;
}

interface signOutAction {
  type: typeof SIGN_OUT;
}

export interface authState {
  signed: boolean;
  loading: boolean;
}

export type authActionTypes =
  | signInRequestAction
  | signInSuccessAction
  | signInFailureAction
  | signOutAction;
