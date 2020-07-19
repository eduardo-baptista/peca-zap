import produce from 'immer';

import {
  contactsState,
  contactsActionTypes,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_REQUEST,
} from './types';

const INITIAL_STATE: contactsState = {
  loading: false,
  contacts: [],
};

export default function contactsReducer(
  state = INITIAL_STATE,
  action: contactsActionTypes
): contactsState {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_DATA_REQUEST: {
        draft.loading = true;
        break;
      }

      case LOAD_DATA_SUCCESS: {
        draft.loading = false;
        draft.contacts = [...action.payload.contacts];
        break;
      }

      default:
    }
  });
}
