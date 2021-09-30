import {
  SET_REPOSITORY_INFO,
  SET_REPOSITORY_COMMITS,
  SET_REPOSITORY_LANGUAGES,
  SET_REPOSITORY_CONTRIBUTORS,
  SET_LOADED_CARD,
  USER_CARD_PAGE_SET_REPOSITORY_NAME
} from './types';
import { AnyAction } from 'redux';

export const repositoryInfoAC = (items: string): AnyAction => ({
  type: SET_REPOSITORY_INFO,
  payload: items
});

export const repositoryCommitsAC = (items: string): AnyAction => ({
  type: SET_REPOSITORY_COMMITS,
  payload: items
});

export const repositoryLanguagesAC = (items: string): AnyAction => ({
  type: SET_REPOSITORY_LANGUAGES,
  payload: items
});

export const repositoryContributorsAC = (items: string): AnyAction => ({
  type: SET_REPOSITORY_CONTRIBUTORS,
  payload: items
});

export const setLoaded = (payload: boolean): AnyAction => ({
  type: SET_LOADED_CARD,
  payload
});

export const setRepositoryNameAC = (payload: string): AnyAction => ({
  type: USER_CARD_PAGE_SET_REPOSITORY_NAME,
  payload
});
