import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledMain } from './styled';

import ReposList from './ReposList/ReposList';
import PaginationBlock from './PaginationBlock/PaginationBlock';
import SearchBlock from './SearchBlock/SearchBlock';

import { getNameAC, getPageAC } from '../../redux/AllRepositoriesPage/actions';
import {
  setCommitsThunk,
  setRepositoriesThunk
} from '../../redux/AllRepositoriesPage/thunks';

const AllRepositoriesPage: React.FC = () => {
  const dispatch = useDispatch();
  const {
    allRepositoriesPageReducer: { listRepositories, pageSearch, nameSearch }
  }: any = useSelector((store) => store);

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
    if (listRepositories) {
      dispatch(setCommitsThunk(listRepositories.items[0].full_name));
    }
  }, [dispatch, listRepositories]);

  return (
    <StyledMain>
      <SearchBlock handlerNameSearch={handlerNameSearch} />
      <ReposList />
      <PaginationBlock changePage={handlerChangePage} />
    </StyledMain>
  );
};

export default AllRepositoriesPage;
