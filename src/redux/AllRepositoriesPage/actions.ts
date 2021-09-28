import {
  GET_NAME_SEARCH,
  GET_PAGE,
  SET_COMMITS_LIST,
  SET_DEFAULT_REPOSITORIES,
  SET_LOADED
} from './types';

export const setDefaultReposAC = (items: any) => ({
  type: SET_DEFAULT_REPOSITORIES,
  payload: items
});

export const getPageAC = (pageNumber: string) => ({
  type: GET_PAGE,
  payload: pageNumber
});

export const getNameAC = (name: string) => ({
  type: GET_NAME_SEARCH,
  payload: name
});

export const setLoaded = (payload: any) => ({ type: SET_LOADED, payload });

export const setCommitsListAC = (items: any) => ({
  type: SET_COMMITS_LIST,
  payload: items
});
