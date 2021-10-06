import { GET_TOKEN, REMOVE_TOKEN } from './types';
import { AnyAction } from 'redux';

export const getTokenAC = (token: string): AnyAction => ({
  type: GET_TOKEN,
  payload: {
    token
  }
});

export const logoutUserAC = (): AnyAction => ({
  type: REMOVE_TOKEN
});
