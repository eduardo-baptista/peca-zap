import { call, put, all, takeLatest } from 'redux-saga/effects';

import { AxiosResponse } from 'axios';

import api from 'services/api';

import { ICustomer } from 'typings/ICustomer';
import { loadDataSuccess } from './actions';
import { LOAD_DATA_REQUEST } from './types';

export function* loadData() {
  const { data }: AxiosResponse<ICustomer[]> = yield call(api.get, 'customers');

  yield put(loadDataSuccess(data));
}

export default all([takeLatest(LOAD_DATA_REQUEST, loadData)]);
