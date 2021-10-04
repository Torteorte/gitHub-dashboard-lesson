import React, { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { StyledMain } from './styled';

import {
  setContributorsThunk,
  setRepositoryThunk,
  setResponseCommitsThunk,
  setResponseLanguageThunk
} from './thunks';
import { setRepositoryNameAC } from './actions';
import { useParams } from 'react-router-dom';

import { CardHeader } from './CardHeader/CardHeader';
import { UserInfo } from './UserInfo/UserInfo';
import { Languages } from './Languages/Languages';
import { Contributors } from './Contributors/Contributors';
import { PageNotFound } from '../PageNotFound/PageNotFound';

export const RepositoryCard: React.FC = () => {
  const dispatch = useDispatch();
  const [errorStatus, setErrorStatus] = useState(false);
  const {
    userPageReducer: { repositoryInfo, isLoaded }
  }: RootStateOrAny = useSelector((store) => store);

  // @ts-ignore
  const { idUser, idRepository } = useParams();
  const repositoryName = `${idUser}/${idRepository}`;

  React.useEffect(() => {
    dispatch(setRepositoryThunk(repositoryName, setErrorStatus));
  }, [dispatch, repositoryName]);

  React.useEffect(() => {
    if (!repositoryInfo.userName) {
      return;
    }
    dispatch(setRepositoryNameAC(repositoryName));
    dispatch(setResponseCommitsThunk(repositoryName));
    dispatch(setResponseLanguageThunk(repositoryName));
    dispatch(setContributorsThunk(repositoryName));
  }, [dispatch, repositoryInfo, repositoryName]);

  return (
    <>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : errorStatus ? (
        <PageNotFound />
      ) : (
        <StyledMain>
          <CardHeader />
          <UserInfo />
          <Languages />
          <Contributors />
        </StyledMain>
      )}
    </>
  );
};
