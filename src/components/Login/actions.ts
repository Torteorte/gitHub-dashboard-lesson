import { LOGIN_USER, LOGOUT_USER } from './types';
import { AnyAction } from 'redux';

export const loginUserAC = (
  id: string,
  login: string,
  email: string,
  isAuth: boolean
): AnyAction => ({
  type: LOGIN_USER,
  payload: {
    id,
    login,
    email,
    isAuth
  }
});

export const logoutUserAC = (isAuth: boolean): AnyAction => ({
  type: LOGOUT_USER,
  payload: {
    isAuth
  }
});
