import { AnyAction } from 'redux';
import { LOGIN_USER, LOGOUT_USER } from './types';

const initialState = {
  id: localStorage.getItem('userId') || null,
  login: localStorage.getItem('userLogin') || 'Alex',
  email: localStorage.getItem('userEmail') || null,
  isAuth: localStorage.getItem('userIsAuth') || false
};

const authReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN_USER:
      localStorage.setItem('userId', action.payload.id);
      localStorage.setItem('userLogin', action.payload.login);
      localStorage.setItem('userEmail', action.payload.email);
      localStorage.setItem('userIsAuth', action.payload.isAuth);
      return {
        ...state,
        id: localStorage.getItem('userId'),
        login: localStorage.getItem('userLogin'),
        email: localStorage.getItem('userEmail'),
        isAuth: localStorage.getItem('userIsAuth')
      };

    case LOGOUT_USER:
      localStorage.removeItem('userId');
      localStorage.removeItem('userLogin');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userIsAuth');
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
