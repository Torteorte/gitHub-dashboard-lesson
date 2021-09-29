import {
  GET_NAME_SEARCH,
  GET_PAGE,
  SET_DEFAULT_REPOSITORIES,
  SET_LOADED,
  SET_FULL_NAMES,
  SET_COMMITS_LIST
} from './types';

export const setDefaultReposAC = (items: Record<string, unknown>): unknown => ({
  type: SET_DEFAULT_REPOSITORIES,
  payload: items
});

export const getPageAC = (pageNumber: string): unknown => ({
  type: GET_PAGE,
  payload: pageNumber
});

export const getNameAC = (name: string): unknown => ({
  type: GET_NAME_SEARCH,
  payload: name
});

export const setLoaded = (payload: boolean): unknown => ({
  type: SET_LOADED,
  payload
});

export const setFullNamesListAC = (
  items: Record<string, unknown>
): unknown => ({
  type: SET_FULL_NAMES,
  payload: items
});

export const setCommitsListAC = (items: string): unknown => ({
  type: SET_COMMITS_LIST,
  payload: items
});
