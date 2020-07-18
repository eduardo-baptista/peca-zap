import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'services/api';
import { IUser } from 'typings/IUser';

import { AxiosResponse } from 'axios';
import { signInFailure, signInSuccess } from './actions';
import { signInRequestAction, SIGN_IN_REQUEST } from './types';

export function* signIn({ payload }: signInRequestAction) {
  const { data }: AxiosResponse<IUser> = yield call(api.get, 'user');

  if (payload.user !== data.user || payload.password !== data.password) {
    toast.error('Usuário ou senha incorreto!');
    yield put(signInFailure());
    return;
  }

  delete data.password;

  yield put(signInSuccess(data));
}

export default all([takeLatest(SIGN_IN_REQUEST, signIn)]);
