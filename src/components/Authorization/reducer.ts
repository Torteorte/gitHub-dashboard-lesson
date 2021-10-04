import { AnyAction } from 'redux';
import { LOGIN_USER, LOGOUT_USER } from './types';

const initialState = {
  id: localStorage.getItem('userId') || '',
  login: localStorage.getItem('userLogin') || '',
  email: localStorage.getItem('userEmail') || '',
  isAuth: true
};

const authReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN_USER:
      localStorage.setItem('userId', action.payload.id);
      localStorage.setItem('userLogin', action.payload.login);
      localStorage.setItem('userEmail', action.payload.email);
      return {
        ...state,
        id: localStorage.getItem('userId'),
        login: localStorage.getItem('userLogin'),
        email: localStorage.getItem('userEmail'),
        isAuth: action.payload.isAuth
      };

    case LOGOUT_USER:
      localStorage.setItem('userId', '');
      localStorage.setItem('userLogin', '');
      localStorage.setItem('userEmail', '');
      return {
        ...state,
        id: localStorage.getItem('userId'),
        login: localStorage.getItem('userLogin'),
        email: localStorage.getItem('userEmail'),
        isAuth: action.payload.isAuth
      };

    default:
      return state;
  }
};

export default authReducer;
