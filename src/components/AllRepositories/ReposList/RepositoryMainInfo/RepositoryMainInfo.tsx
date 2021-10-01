import React from 'react';
import { StyledLeftContainer, StyledUserName } from './styled';

import { LinkToCard } from './LinkToCard/LinkToCard';

interface props {
  userName: string;
  repositoryName: string;
}

export const RepositoryMainInfo: React.FC<props> = ({
  userName,
  repositoryName
}) => {
  return (
    <StyledLeftContainer>
      <StyledUserName>{userName}</StyledUserName>
      <p>
        <LinkToCard repositoryName={repositoryName} />
      </p>
    </StyledLeftContainer>
  );
};
