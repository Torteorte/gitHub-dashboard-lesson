import React from 'react';
import {
  StyledLinkBack,
  StyledUserAvatar,
  StyledUserContainer,
  StyledUserName
} from './styled';
import defaultImg from '../../../assets/default-git-hub-img.png';
import { ROUTES } from '../../../common/routes/routes';

export const UserPage: React.FC = () => {
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
