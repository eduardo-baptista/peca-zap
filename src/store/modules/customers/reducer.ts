import produce from 'immer';

import {
  customersState,
  customersActionTypes,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_REQUEST,
} from './types';

const INITIAL_STATE: customersState = {
  selectedId: null,
  loading: false,
  customers: [],
};

export default function customersReducer(
  state = INITIAL_STATE,
  action: customersActionTypes
): customersState {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_DATA_REQUEST: {
        draft.loading = true;
        break;
      }
      case LOAD_DATA_SUCCESS: {
        draft.loading = false;
        draft.customers = [...action.payload.customers];
        break;
      }
      default:
    }
  });
}
