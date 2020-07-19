import { call, put, all, takeLatest } from 'redux-saga/effects';

import { AxiosResponse } from 'axios';

import api from 'services/api';

import { addMessageToSee } from 'store/modules/customers/actions';

import { IChat } from 'typings/IChat';
import { loadDataSuccess } from './actions';
import { LOAD_DATA_REQUEST } from './types';

export function* loadData() {
  const { data }: AxiosResponse<IChat[]> = yield call(api.get, 'chats');

  yield all(
    data.map((chat) => {
      const messsagesToSee = chat.messages.filter((msg) => !msg.seen).length;
      return put(addMessageToSee(chat.channel, chat.customer, messsagesToSee));
    })
  );

  yield put(loadDataSuccess(data));
}

export default all([takeLatest(LOAD_DATA_REQUEST, loadData)]);
