import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import customers from './customers/saga';

export default function* rootSaga() {
  return yield all([auth, customers]);
}
