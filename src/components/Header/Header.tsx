import React from 'react';
import { StyledHeader, StyledLink, StyledTitle } from './styled';
import { ROUTES } from '../../common/routes/routes';

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledTitle>GitHub Dashboard</StyledTitle>
      <StyledLink title={`To all repositories`} to={ROUTES.allRepos}>
        To All Repositories
      </StyledLink>
    </StyledHeader>
  );
};
