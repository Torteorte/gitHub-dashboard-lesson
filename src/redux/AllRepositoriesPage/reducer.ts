import {
  GET_NAME_SEARCH,
  GET_PAGE,
  SET_DEFAULT_REPOSITORIES,
  SET_LOADED,
  SET_FULL_NAMES
  // SET_COMMITS_LIST
} from './types';

const initialState = {
  listRepositories: [],
  pageSearch: localStorage.getItem('selectPage') || '1',
  nameSearch: localStorage.getItem('selectName') || 'stars',
  isLoaded: false,
  listCommitsRepositories: {}
  // listLastCommits: {}
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
        listCommitsRepositories: action.payload
      };

    // case SET_COMMITS_LIST:
    //   return {
    //     ...state,
    //     listLastCommits: {
    //       ...state.listLastCommits,
    //       list: [...state.listLastCommits.list, action.payload]
    //     }
    //   };

    default:
      return state;
  }
};

export default allRepositories;