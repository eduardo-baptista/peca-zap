import produce from 'immer';
import {
  authActionTypes,
  SIGN_IN_REQUEST,
  authState,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT,
} from './types';

const INITIAL_STATE: authState = {
  loading: false,
  signed: false,
};

export default function authReducer(
  state = INITIAL_STATE,
  action: authActionTypes
): authState {
  return produce(state, (draft) => {
    switch (action.type) {
      case SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }
      case SIGN_IN_SUCCESS: {
        draft.loading = false;
        draft.signed = true;
        break;
      }
      case SIGN_IN_FAILURE: {
        draft.loading = false;
        draft.signed = false;
        break;
      }
      case SIGN_OUT: {
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
