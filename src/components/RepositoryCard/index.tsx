import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledMain } from './styled';

import { CardHeader } from './CardHeader/CardHeader';
import { UserInfo } from './UserInfo/UserInfo';
import { Languages } from './Languages/Languages';
import { Contributors } from './Contributors/Contributors';

import { setRepositoryThunk } from './thunks';

export const RepositoryCard: React.FC = () => {
  const dispatch = useDispatch();
  const {
    userPageReducer: { repositoryName }
  }: any = useSelector((store) => store);

  React.useEffect(() => {
    dispatch(setRepositoryThunk(repositoryName));
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
