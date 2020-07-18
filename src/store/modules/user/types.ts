import { signInSuccessAction } from 'store/modules/auth/types';

export interface userState {
  name: string;
  user: string;
  company: string;
  photo: string;
}

export type userActionTypes = signInSuccessAction;
