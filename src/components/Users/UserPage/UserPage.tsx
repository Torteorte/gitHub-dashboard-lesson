import React from 'react';
import {
  StyledLinkBack,
  StyledUserAvatar,
  StyledUserContainer,
  StyledUserName
} from './styled';
import { ROUTES } from '../../../common/routes/routes';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import defaultImg from '../../../assets/default-git-hub-img.png';

export const UserPage: React.FC = () => {
  const {
    authReducer: { isAuth }
  }: RootStateOrAny = useSelector((store) => store);

  if (!isAuth) {
    return <Redirect to={ROUTES.login} />;
  }

  return (
    <StyledUserContainer>
      <StyledUserAvatar src={defaultImg} alt="user avatar" />
      <StyledUserName>username</StyledUserName>
      <p>Last Login: </p>
      <p>Active status</p>
      <StyledLinkBack to={ROUTES.users}>Go Back...</StyledLinkBack>
    </StyledUserContainer>
  );
};
