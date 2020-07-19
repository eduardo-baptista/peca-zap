import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'services/api';
import { IUser } from 'typings/IUser';

import { loadDataRequest as loadCustomersRequest } from 'store/modules/customers/actions';
import { loadDataRequest as loadChatsRequest } from 'store/modules/chats/actions';

import { AxiosResponse } from 'axios';
import { TakeableChannel } from 'redux-saga';
import { signInRequestAction, SIGN_IN_REQUEST, authState } from './types';

import { signInFailure, signInSuccess } from './actions';

export function* signIn({ payload }: signInRequestAction) {
  const { data }: AxiosResponse<IUser> = yield call(api.get, 'user');

  if (payload.user !== data.user || payload.password !== data.password) {
    toast.error('Usuário ou senha incorreto!');
    yield put(signInFailure());
    return;
  }

  delete data.password;

  yield put(signInSuccess(data));
  yield put(loadCustomersRequest());
  yield put(loadChatsRequest());
}

interface setDataParams {
  payload: {
    auth: authState;
  };
}

export function* setData({ payload }: setDataParams) {
  if (!payload.auth.signed) return;

  yield put(loadCustomersRequest());
  yield put(loadChatsRequest());
}

export default all([
  takeLatest(SIGN_IN_REQUEST, signIn),
  takeLatest(
    ('persist/REHYDRATE' as unknown) as TakeableChannel<unknown>,
    setData
  ),
]);
