import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { StyledMain } from './styled';

import { IGithubData, IRepository } from '../../common/utils/utils';

import ReposList from './ReposList/ReposList';
import PaginationBlock from './PaginationBlock/PaginationBlock';
import SearchBlock from './SearchBlock/SearchBlock';

import {
  getNameAC,
  getPageAC,
  setFullNamesListAC
} from '../../redux/AllRepositoriesPage/actions';
import {
  setCommitsThunk,
  setRepositoriesThunk
} from '../../redux/AllRepositoriesPage/thunks';

const AllRepositoriesPage: React.FC = () => {
  const dispatch = useDispatch();
  const {
    allRepositoriesPageReducer: {
      listRepositories,
      pageSearch,
      nameSearch,
      listCommitsRepositories
    }
  }: RootStateOrAny = useSelector((store) => store);

  const handlerChangePage = (pageNumber: string) => {
    dispatch(getPageAC(pageNumber));
  };

  const handlerNameSearch = (name: string) => {
    dispatch(getNameAC(name));
  };

  React.useEffect(() => {
    dispatch(setRepositoriesThunk(pageSearch, nameSearch));
  }, [dispatch, pageSearch, nameSearch]);

  React.useEffect(() => {
    if (listRepositories.items === undefined) return;
    const listRepositoriesObjects = listRepositories.items.reduce(
      (prev: IGithubData, obj: Record<string, unknown>) => {
        const repositoryItem: IRepository = {
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
  }, [dispatch, listRepositories.items]);

  React.useEffect(() => {
    Object.keys(listCommitsRepositories).forEach(function (key) {
      // console.log(key, listCommitsRepositories[key].full_name);
      dispatch(setCommitsThunk(listCommitsRepositories[key].commits_url));
    });
  }, [dispatch, listCommitsRepositories]);

  return (
    <StyledMain>
      <SearchBlock handlerNameSearch={handlerNameSearch} />
      <ReposList />
      <PaginationBlock changePage={handlerChangePage} />
    </StyledMain>
  );
};

export default AllRepositoriesPage;
