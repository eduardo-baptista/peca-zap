import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import customers from './customers/reducer';
import chats from './chats/reducer';

export default combineReducers({
  auth,
  user,
  customers,
  chats,
});
