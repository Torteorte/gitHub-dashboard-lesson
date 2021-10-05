import React from 'react';
import {
  StyledList,
  StyledUserAvatar,
  StyledUserItem,
  StyledUserName,
  StyledLink
} from './styled';
import defaultImg from '../../../assets/default-git-hub-img.png';
import { ROUTES } from '../../../common/routes/routes';

export const UsersList: React.FC = () => {
  const userItem = (
    <StyledUserItem>
      <StyledLink title={`To user page`} to={ROUTES.userPage}>
        <StyledUserAvatar src={defaultImg} alt="user avatar" />
        <StyledUserName>username</StyledUserName>
      </StyledLink>
    </StyledUserItem>
  );
  return (
    <StyledList>
      {userItem}
      {userItem}
      {userItem}
      {userItem}
      {userItem}
      {userItem}
      {userItem}
      {userItem}
      {userItem}
    </StyledList>
  );
};
