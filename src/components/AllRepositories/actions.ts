import {
  GET_NAME_SEARCH,
  GET_PAGE,
  SET_DEFAULT_REPOSITORIES,
  SET_LOADED,
  SET_COMMITS_DATE
} from './types';
import { AnyAction } from 'redux';

export const setDefaultReposAC = (
  total_count: number,
  items: string
): AnyAction => ({
  type: SET_DEFAULT_REPOSITORIES,
  payload: {
    total_count,
    items
  }
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
