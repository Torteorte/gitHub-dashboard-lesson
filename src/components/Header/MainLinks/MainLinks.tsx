import React from 'react';
import { StyledContainer, StyledLinkToRepositories } from './styled';
import { ROUTES } from '../../../common/routes/routes';

export const MainLinks: React.FC = () => {
  return (
    <StyledContainer>
      <StyledLinkToRepositories
        title={`To all repositories`}
        to={ROUTES.allRepos}
      >
        To All Repositories
      </StyledLinkToRepositories>
      <StyledLinkToRepositories title={`To all users`} to={ROUTES.users}>
        Users
      </StyledLinkToRepositories>
    </StyledContainer>
  );
};
