import {
  GET_NAME_SEARCH,
  GET_PAGE,
  SET_DEFAULT_REPOSITORIES,
  SET_LOADED,
  SET_FULL_NAMES,
  SET_COMMITS_DATE
} from './types';

const initialState = {
  listRepositories: [],
  pageSearch: localStorage.getItem('selectPage') || '1',
  nameSearch: localStorage.getItem('selectName') || 'stars',
  isLoaded: false,
  repositoriesWithDateCommit: {}
};

const allRepositories = (state = initialState, action: any): unknown => {
  switch (action.type) {
    case SET_DEFAULT_REPOSITORIES:
      return {
        ...state,
        listRepositories: action.payload,
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
        isLoaded: action.payload
      };

    case SET_FULL_NAMES:
      return {
        ...state,
        repositoriesWithDateCommit: action.payload
      };

    case SET_COMMITS_DATE:
      const key = action.payload.reposName.full_name;
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
