import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import {
  StyledContributorAvatar,
  StyledContributorItem,
  StyledContributors,
  StyledContributorsList,
  StyledTitle
} from './styled';

export const Contributors: React.FC = () => {
  const {
    userPageReducer: { repositoryContributors }
  }: RootStateOrAny = useSelector((store) => store);

  return (
    <StyledContributors>
      <StyledTitle>Main contributors:</StyledTitle>
      <StyledContributorsList>
        {repositoryContributors.length !== 0 ? (
          repositoryContributors.map((user: any) => (
            <StyledContributorItem key={user.id}>
              <a href={user.htmlUrl} title={user.login}>
                <StyledContributorAvatar
                  src={user.avatarUrl}
                  alt="avatar_fhoto"
                  width={50}
                />
              </a>
            </StyledContributorItem>
          ))
        ) : (
          <StyledContributorItem>loading...</StyledContributorItem>
        )}
      </StyledContributorsList>
    </StyledContributors>
  );
};
