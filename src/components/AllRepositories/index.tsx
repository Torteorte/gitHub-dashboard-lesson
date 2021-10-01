import React from 'react';
import { StyledMain } from './styled';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
// import { IGithubData, IRepository } from '../../common/utils/types';

import { ReposList } from './ReposList/ReposList';
import { PaginationBlock } from './PaginationBlock/PaginationBlock';
import { SearchBlock } from './SearchBlock/SearchBlock';

import { getNameAC, getPageAC } from './actions';
import { setRepositoriesThunk, getRepositoryInfoThunk } from './thunks';

export const AllRepositories: React.FC = () => {
  const dispatch = useDispatch();
  const {
    allRepositoriesPageReducer: { listRepositories, pageSearch, nameSearch }
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
    listRepositories.items.map((fullName: any) =>
      dispatch(getRepositoryInfoThunk(fullName.full_name))
    );
  }, [dispatch, listRepositories]);

  return (
    <StyledMain>
      <SearchBlock handlerNameSearch={handlerNameSearch} />
      <ReposList />
      <PaginationBlock changePage={handlerChangePage} />
    </StyledMain>
  );
};
