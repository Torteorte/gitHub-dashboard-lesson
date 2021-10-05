import React from 'react';
import { StyledUsersContainer } from './styled';
import { UsersHeader } from './UsersHeader/UsersHeader';
import { UsersList } from './UsersList/UsersList';

export const Users: React.FC = () => {
  return (
    <StyledUsersContainer>
      <UsersHeader />
      <UsersList />
    </StyledUsersContainer>
  );
};
