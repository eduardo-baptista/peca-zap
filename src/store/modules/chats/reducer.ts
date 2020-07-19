import produce from 'immer';
import { chatsState, chatsActionTypes, LOAD_DATA_SUCCESS } from './types';

const INITIAL_STATE: chatsState = {
  chats: [],
};

export default function chatsReducer(
  state = INITIAL_STATE,
  action: chatsActionTypes
): chatsState {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_DATA_SUCCESS: {
        draft.chats = [...action.payload.chats];
        break;
      }
      default:
    }
  });
}
