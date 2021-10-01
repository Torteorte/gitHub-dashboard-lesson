import {
  GET_NAME_SEARCH,
  GET_PAGE,
  SET_DEFAULT_REPOSITORIES,
  SET_LOADED,
  SET_COMMITS_DATE
} from './types';
import { AnyAction } from 'redux';

const initialState = {
  listRepositories: {
    total_count: 0,
    items: []
  },
  pageSearch: localStorage.getItem('selectPage') || '1',
  nameSearch: localStorage.getItem('selectName') || 'language:javascript',
  isLoaded: false,
  repositoriesWithDateCommit: {}
};

const allRepositories = (state = initialState, action: AnyAction): unknown => {
  switch (action.type) {
    case SET_DEFAULT_REPOSITORIES:
      return {
        ...state,
        listRepositories: {
          total_count: action.payload.total_count,
          items: action.payload.items
        },
        isLoaded: true
      };

    case GET_PAGE:
      localStorage.setItem('selectPage', action.payload);
      return {
        ...state,
        pageSearch: localStorage.getItem('selectPage')
      };

    case GET_NAME_SEARCH:
      localStorage.setItem('selectPage', '1');
      localStorage.setItem('selectName', action.payload);
      return {
        ...state,
        nameSearch: localStorage.getItem('selectName'),
        pageSearch: '1'
      };

    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
        listKeys: [],
        repositoriesWithDateCommit: {}
      };

    case SET_COMMITS_DATE:
      const key = action.payload.reposName;
      return {
        ...state,
        repositoriesWithDateCommit: {
          ...state.repositoriesWithDateCommit,
          [key]: {
            // @ts-ignore
            ...state.repositoriesWithDateCommit[key],
            date: action.payload.reposDate
          }
        }
      };

    default:
      return state;
  }
};

export default allRepositories;
