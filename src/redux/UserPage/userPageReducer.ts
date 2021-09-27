import {
  SET_REPOSITORY_INFO,
  SET_REPOSITORY_COMMITS,
  SET_REPOSITORY_LANGUAGES,
  SET_REPOSITORY_CONTRIBUTORS,
  SET_LOADED
} from './types';

const initialState = {
  userName: '996icu',
  repositoryName: '996.ICU',
  repositoryInfo: {},
  repositoryCommits: {},
  repositoryLanguages: {},
  repositoryContributors: {},
  isLoaded: false
};

const userPageReducer = (state = initialState, action: any) => {
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

    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload
      };

    default:
      return state;
  }
};

export default userPageReducer;
