import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import {
  StyledList,
  StyledListItem,
  StyledLoading,
  StyledNoResult
} from './styled';

import { RepositoryMainInfo } from './RepositoryMainInfo/RepositoryMainInfo';
import { RepositoryStats } from './RepositoryStats/RepositoryStats';

export const ReposList: React.FC = () => {
  const {
    allRepositoriesPageReducer: { listRepositories, isLoaded }
  }: RootStateOrAny = useSelector((store) => store);

  const repositoriesLIst = isLoaded ? (
    listRepositories.items.map((obj: any, index: number) => (
      <StyledListItem key={obj.id}>
        <RepositoryMainInfo
          userName={obj.owner.login}
          repositoryName={obj.name}
        />
        <RepositoryStats stars={obj.stargazers_count} index={index} />
      </StyledListItem>
    ))
  ) : (
    <StyledLoading>Loading...</StyledLoading>
  );

  return (
    <StyledList>
      {listRepositories.total_count !== 0 ? (
        repositoriesLIst
      ) : (
        <StyledNoResult>No Results! Try another one.</StyledNoResult>
      )}
    </StyledList>
  );
};
