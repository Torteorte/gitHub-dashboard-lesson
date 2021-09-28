import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { StyledMain } from './styled';

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
      listFullNames
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
    const listArray = listRepositories.items.map(
      (obj: Record<string, unknown>) => obj.full_name
    );
    dispatch(setFullNamesListAC(listArray));
  }, [dispatch, listRepositories.items]);

  React.useEffect(() => {
    listFullNames.map((obj: string) => dispatch(setCommitsThunk(obj)));
  }, [dispatch, listFullNames]);

  // console.log(listFullNames);

  return (
    <StyledMain>
      <SearchBlock handlerNameSearch={handlerNameSearch} />
      <ReposList />
      <PaginationBlock changePage={handlerChangePage} />
    </StyledMain>
  );
};

export default AllRepositoriesPage;
