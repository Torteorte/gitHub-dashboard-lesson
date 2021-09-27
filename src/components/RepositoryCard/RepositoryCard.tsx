import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyledMain } from './styled';

import CardHeader from './CardHeader/CardHeader';
import UserInfo from './UserInfo/UserInfo';
import Languages from './Languages/Languages';
import Contributors from './Contributors/Contributors';

import { setRepositoryThunk } from '../../redux/UserPage/thunks';

const RepositoryCard: React.FC = () => {
  const dispatch = useDispatch();
  const {
    userPageReducer: { userName, repositoryName }
  }: any = useSelector((store) => store);

  React.useEffect(() => {
    dispatch(setRepositoryThunk(userName, repositoryName));
  }, [dispatch, userName, repositoryName]);

  return (
    <StyledMain>
      <CardHeader />
      <UserInfo />
      <Languages />
      <Contributors />
    </StyledMain>
  );
};

export default RepositoryCard;