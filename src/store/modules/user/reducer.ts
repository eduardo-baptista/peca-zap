import produce from 'immer';

import { SIGN_IN_SUCCESS, SIGN_OUT } from 'store/modules/auth/types';
import { userState, userActionTypes } from './types';

const INITIAL_STATE: userState = {
  user: '',
  company: '',
  name: '',
  photo: '',
};

export default function userReducer(
  state = INITIAL_STATE,
  action: userActionTypes
): userState {
  return produce(state, (draft) => {
    switch (action.type) {
      case SIGN_IN_SUCCESS: {
        const { user } = action.payload;

        draft.user = user.user;
        draft.company = user.company;
        draft.name = user.name;
        draft.photo = user.photo;
        break;
      }
      case SIGN_OUT: {
        draft.user = '';
        draft.company = '';
        draft.name = '';
        draft.photo = '';
        break;
      }
      default:
    }
  });
}
