import React from 'react';

import {
  StyledContributorAvatar,
  StyledContributorItem,
  StyledContributors,
  StyledContributorsList,
  StyledTitle
} from './styled';
import { useSelector } from 'react-redux';

export const Contributors: React.FC = () => {
  const {
    userPageReducer: { repositoryContributors, isLoaded }
  }: any = useSelector((store) => store);

  return (
    <StyledContributors>
      <StyledTitle>Main contributors:</StyledTitle>
      <StyledContributorsList>
        {isLoaded ? (
          repositoryContributors.map((obj: any) => (
            <StyledContributorItem key={obj.id}>
              <a href={obj.html_url}>
                <StyledContributorAvatar
                  src={obj.avatar_url}
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
