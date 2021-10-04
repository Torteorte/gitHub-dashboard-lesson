import { AnyAction } from 'redux';
import { LOGIN_USER, LOGOUT_USER } from './types';

const initialState = {
  // id: '',
  // login: '',
  // email: '',
  isAuth: true
};

const authReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuth: action.payload.isAuth
      };

    case LOGOUT_USER:
      return {
        ...state,
        isAuth: action.payload.isAuth
      };

    default:
      return state;
  }
};

export default authReducer;
