import {
  SET_REPOSITORY_INFO,
  SET_REPOSITORY_COMMITS,
  SET_REPOSITORY_LANGUAGES,
  SET_REPOSITORY_CONTRIBUTORS
} from './types';

const initialState = {
  userName: 'yangshun',
  repositoryName: 'tech-interview-handbook',
  repositoryInfo: {},
  repositoryCommits: {},
  repositoryLanguages: {},
  repositoryContributors: null
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
        repositoryContributors: action.payload
      };

    default:
      return state;
  }
};

export default userPageReducer;
