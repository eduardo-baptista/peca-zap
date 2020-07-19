import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import customers from './customers/saga';
import chats from './chats/saga';
import contacts from './contacts/saga';

export default function* rootSaga() {
  return yield all([auth, customers, chats, contacts]);
}
