import React from 'react';
import { useDispatch } from 'react-redux';
import { StyledLeftContainer, StyledUserName } from './styled';
import { setRepositoryNameAC } from '../../../RepositoryCard/actions';

import { LinkToCard } from './LinkToCard/LinkToCard';

interface props {
  userName: string;
  repositoryName: string;
}

export const RepositoryMainInfo: React.FC<props> = ({
  userName,
  repositoryName
}) => {
  const dispatch = useDispatch();

  const changeRepositoryName = (name: string) => {
    dispatch(setRepositoryNameAC(name));
  };

  return (
    <StyledLeftContainer>
      <StyledUserName>{userName}</StyledUserName>
      <p>
        <LinkToCard
          userName={userName}
          repositoryName={repositoryName}
          changeRepositoryName={changeRepositoryName}
        />
      </p>
    </StyledLeftContainer>
  );
};
