import { call, put, all, takeLatest } from 'redux-saga/effects';

import { AxiosResponse } from 'axios';

import api from 'services/api';
import { IContact } from 'typings/IContact';

import { LOAD_DATA_REQUEST } from './types';

import { loadDataSuccess } from './actions';

export function* loadData() {
  const { data }: AxiosResponse<IContact[]> = yield call(api.get, 'contacts');

  yield put(loadDataSuccess(data));
}

export default all([takeLatest(LOAD_DATA_REQUEST, loadData)]);
