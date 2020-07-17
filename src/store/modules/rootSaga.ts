import { all, AllEffect } from 'redux-saga/effects';

export default function* rootSaga(): Generator<AllEffect<never>> {
  return yield all([]);
}
