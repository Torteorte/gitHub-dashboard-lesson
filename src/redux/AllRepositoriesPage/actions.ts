import {
  GET_NAME_SEARCH,
  GET_PAGE,
  SET_DEFAULT_REPOSITORIES,
  SET_LOADED,
  SET_FULL_NAMES,
  SET_LIST_KEYS,
  SET_COMMITS_DATE
} from './types';
import { AnyAction } from 'redux';

export const setDefaultReposAC = (items: string): AnyAction => ({
  type: SET_DEFAULT_REPOSITORIES,
  payload: items
});

export const getPageAC = (pageNumber: unknown): AnyAction => ({
  type: GET_PAGE,
  payload: pageNumber
});

export const getNameAC = (name: string): AnyAction => ({
  type: GET_NAME_SEARCH,
  payload: name
});

export const setLoaded = (payload: boolean): AnyAction => ({
  type: SET_LOADED,
  payload
});

export const setFullNamesListAC = (items: string): AnyAction => ({
  type: SET_FULL_NAMES,
  payload: items
});

export const setListKeysAC = (items: string): AnyAction => ({
  type: SET_LIST_KEYS,
  payload: items
});

export const setCommitDateAC = (
  reposName: string,
  reposDate: string
): AnyAction => ({
  type: SET_COMMITS_DATE,
  payload: {
    reposName,
    reposDate
  }
});
