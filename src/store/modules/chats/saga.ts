import { call, put, all, takeLatest } from 'redux-saga/effects';

import { AxiosResponse } from 'axios';

import api from 'services/api';

import { IChat } from 'typings/IChat';
import { loadDataSuccess } from './actions';
import { LOAD_DATA_REQUEST } from './types';

export function* loadData() {
  const { data }: AxiosResponse<IChat[]> = yield call(api.get, 'chats');

  yield put(loadDataSuccess(data));
}

export default all([takeLatest(LOAD_DATA_REQUEST, loadData)]);
