import React from 'react';
import { StyledMain } from './styled';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { IGithubData, IRepository } from '../../common/utils/types';

import { ReposList } from './ReposList/ReposList';
import { PaginationBlock } from './PaginationBlock/PaginationBlock';
import { SearchBlock } from './SearchBlock/SearchBlock';

import {
  getNameAC,
  getPageAC,
  setFullNamesListAC
} from '../../redux/AllRepositoriesPage/actions';
import {
  setCommitsThunk,
  setRepositoriesThunk
} from '../../redux/AllRepositoriesPage/thunks';

export const AllRepositories: React.FC = () => {
  const dispatch = useDispatch();
  const {
    allRepositoriesPageReducer: {
      listRepositories,
      pageSearch,
      nameSearch,
      repositoriesWithDateCommit
    }
  }: RootStateOrAny = useSelector((store) => store);

  const handlerChangePage = (pageNumber: unknown) => {
    dispatch(getPageAC(pageNumber));
  };

  const handlerNameSearch = (name: string) => {
    dispatch(getNameAC(name));
  };

  React.useEffect(() => {
    dispatch(setRepositoriesThunk(pageSearch, nameSearch));
  }, [dispatch, pageSearch, nameSearch]);

  React.useEffect(() => {
    if (listRepositories.items === undefined) {
      return;
    }
    const listRepositoriesObjects = listRepositories.items.reduce(
      (prev: IGithubData, obj: Record<string, unknown>) => {
        const repositoryItem: IRepository = {
          date: null,
          stars: obj.stargazers_count,
          commits_url: obj.commits_url,
          full_name: obj.full_name
        };

        const repositoriesList: IGithubData = {
          [[repositoryItem.full_name].toString()]: repositoryItem
        };
        return {
          ...prev,
          ...repositoriesList
        };
      },
      {}
    );
    dispatch(setFullNamesListAC(listRepositoriesObjects));
  }, [dispatch, listRepositories]);

  // React.useEffect(() => {
  //   const keylist = Object.keys(repositoriesWithDateCommit);
  //   // Object.keys(repositoriesWithDateCommit).forEach(function (key) {
  //   //   const reposObj = repositoriesWithDateCommit[key];
  //   keylist.map((fullname) => dispatch(setCommitsThunk(fullname)));
  // }, [dispatch, repositoriesWithDateCommit]);

  return (
    <StyledMain>
      <SearchBlock handlerNameSearch={handlerNameSearch} />
      <ReposList />
      <PaginationBlock changePage={handlerChangePage} />
    </StyledMain>
  );
};
