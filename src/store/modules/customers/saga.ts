import { call, put, all, takeLatest } from 'redux-saga/effects';

import { AxiosResponse } from 'axios';

import api from 'services/api';

import { loadDataRequest as loadChatsRequest } from 'store/modules/chats/actions';

import { ICustomer } from 'typings/ICustomer';
import { loadDataSuccess } from './actions';
import { LOAD_DATA_REQUEST, Customer } from './types';

export function* loadData() {
  const { data }: AxiosResponse<ICustomer[]> = yield call(api.get, 'customers');

  const customers = data.map((apiCustomer) => {
    const customer = apiCustomer as Customer;
    customer.messages = {};
    customer.totalMessages = 0;

    return customer;
  });

  yield put(loadDataSuccess(customers));
  yield put(loadChatsRequest());
}

export default all([takeLatest(LOAD_DATA_REQUEST, loadData)]);
