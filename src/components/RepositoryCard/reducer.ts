import {
  SET_REPOSITORY_INFO,
  SET_REPOSITORY_COMMITS,
  SET_REPOSITORY_LANGUAGES,
  SET_REPOSITORY_CONTRIBUTORS,
  SET_LOADED_CARD,
  USER_CARD_PAGE_SET_REPOSITORY_NAME
} from './types';
import { AnyAction } from 'redux';

const initialState = {
  // userName: '996icu', // имя юзера в названии репозитория до слеша
  repositoryName: localStorage.getItem('setName') || '996icu/996.ICU',
  repositoryInfo: {},
  repositoryCommits: '',
  repositoryLanguages: {},
  repositoryContributors: [],
  isLoaded: false
};

const userPageReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_REPOSITORY_INFO:
      return {
        ...state,
        repositoryInfo: action.payload
      };

    case SET_REPOSITORY_COMMITS:
      return {
        ...state,
        repositoryCommits: action.payload
      };

    case SET_REPOSITORY_LANGUAGES:
      return {
        ...state,
        repositoryLanguages: action.payload
      };

    case SET_REPOSITORY_CONTRIBUTORS:
      return {
        ...state,
        repositoryContributors: action.payload,
        isLoaded: true
      };

    case SET_LOADED_CARD:
      return {
        ...state,
        isLoaded: action.payload
      };

    case USER_CARD_PAGE_SET_REPOSITORY_NAME:
      localStorage.setItem('setName', action.payload);
      return {
        ...state,
        repositoryName: localStorage.getItem('setName')
      };

    default:
      return state;
  }
};

export default userPageReducer;
