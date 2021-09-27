import {
  SET_REPOSITORY_INFO,
  SET_REPOSITORY_COMMITS,
  SET_REPOSITORY_LANGUAGES,
  SET_REPOSITORY_CONTRIBUTORS,
  SET_LOADED
} from './types';

export const repositoryInfoAC = (items: any) => ({
  type: SET_REPOSITORY_INFO,
  payload: items
});

export const repositoryCommitsAC = (items: any) => ({
  type: SET_REPOSITORY_COMMITS,
  payload: items
});

export const repositoryLanguagesAC = (items: any) => ({
  type: SET_REPOSITORY_LANGUAGES,
  payload: items
});

export const repositoryContributorsAC = (items: any) => ({
  type: SET_REPOSITORY_CONTRIBUTORS,
  payload: items
});

export const setLoaded = (payload: any) => ({ type: SET_LOADED, payload });
