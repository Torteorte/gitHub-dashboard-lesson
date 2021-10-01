import React from 'react';
import { useDispatch } from 'react-redux';
import { StyledMain } from './styled';

import { setContributorsThunk, setRepositoryThunk } from './thunks';
import { setRepositoryNameAC } from './actions';
import { useParams } from 'react-router-dom';

import { CardHeader } from './CardHeader/CardHeader';
import { UserInfo } from './UserInfo/UserInfo';
import { Languages } from './Languages/Languages';
import { Contributors } from './Contributors/Contributors';

export const RepositoryCard: React.FC = () => {
  const dispatch = useDispatch();

  // @ts-ignore
  const { idUser, idRepository } = useParams();
  const repositoryName = `${idUser}/${idRepository}`;

  React.useEffect(() => {
    dispatch(setRepositoryNameAC(repositoryName));
    dispatch(setRepositoryThunk(repositoryName));
    dispatch(setContributorsThunk(repositoryName));
  }, [dispatch, repositoryName]);

  return (
    <StyledMain>
      <CardHeader />
      <UserInfo />
      <Languages />
      <Contributors />
    </StyledMain>
  );
};
