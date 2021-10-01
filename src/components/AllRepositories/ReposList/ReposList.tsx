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

  const repositoriesList =
    listRepositories.total_count !== 0 ? (
      listRepositories.items.map((obj: any) => (
        <StyledListItem key={obj.full_name}>
          <RepositoryMainInfo
            userName={obj.name}
            repositoryName={obj.full_name}
          />
          <RepositoryStats stars={obj.stars} repositoryName={obj.full_name} />
        </StyledListItem>
      ))
    ) : (
      <StyledNoResult>No Results! Try another one.</StyledNoResult>
    );

  return (
    <StyledList>
      {isLoaded ? repositoriesList : <StyledLoading>Loading...</StyledLoading>}
    </StyledList>
  );
};
