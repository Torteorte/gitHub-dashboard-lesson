import React from 'react';
import { StyledLinkToAll, StyledLogo } from './styled';
import defaultImg from '../../../assets/default-git-hub-img.png';
import { ROUTES } from '../../routes/routes';

export const GitHubLogo: React.FC = () => {
  return (
    <StyledLinkToAll title={`To all repositories`} to={ROUTES.allRepos}>
      <StyledLogo src={defaultImg} alt="GitHub logo" />
    </StyledLinkToAll>
  );
};
