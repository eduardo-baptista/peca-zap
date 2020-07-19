import produce from 'immer';

import {
  customersState,
  customersActionTypes,
  changeSelectedIdAction,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_REQUEST,
  CHANGE_SELECTED_ID,
  ADD_MESSAGE_TO_SEE,
} from './types';

const INITIAL_STATE: customersState = {
  selectedId: 1,
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

      case CHANGE_SELECTED_ID: {
        draft.selectedId = (action as changeSelectedIdAction).payload.id;
        break;
      }

      case ADD_MESSAGE_TO_SEE: {
        const { payload } = action;
        draft.customers = draft.customers.map((customer) => {
          if (customer.id === payload.customerId) {
            const messagesToSee = customer.messages[payload.chat] ?? 0;

            customer.messages[payload.chat] =
              payload.numberOfMessages + messagesToSee;

            customer.totalMessages += payload.numberOfMessages;
          }

          return { ...customer };
        });
        break;
      }

      default:
    }
  });
}
