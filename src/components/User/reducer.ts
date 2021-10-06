import { AnyAction } from 'redux';
import { GET_TOKEN, REMOVE_TOKEN } from './types';
import { TOKEN } from '../../common/constants/constants';

const initialState = {
  token: localStorage.getItem(TOKEN) || null,
  login: localStorage.getItem('userLogin') || 'Alex'
};

const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_TOKEN:
      localStorage.setItem(TOKEN, action.payload.token);
      return {
        ...state,
        token: localStorage.getItem(TOKEN)
      };

    case REMOVE_TOKEN:
      localStorage.removeItem(TOKEN);
      return {
        ...state,
        token: localStorage.getItem(TOKEN)
      };

    default:
      return state;
  }
};

export default userReducer;
