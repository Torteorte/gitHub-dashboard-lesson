import React from 'react';
import { StyledRightContainer, StyledStarIcon } from './styled';
import { RootStateOrAny, useSelector } from 'react-redux';

interface props {
  stars: number;
  index: number;
}

export const RepositoryStats: React.FC<props> = ({ stars, index }) => {
  const {
    allRepositoriesPageReducer: { repositoriesWithDateCommit }
  }: RootStateOrAny = useSelector((store) => store);

  const arrayDates = Object.keys(repositoriesWithDateCommit);
  const itemDate = repositoriesWithDateCommit[arrayDates[index]];

  return (
    <StyledRightContainer>
      <p>
        <StyledStarIcon
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          className="octicon octicon-star"
        >
          <path
            fillRule="evenodd"
            d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
          ></path>
        </StyledStarIcon>
        Stars {stars}
      </p>
      <p>
        Last commit:{' '}
        {itemDate && itemDate.date !== null
          ? repositoriesWithDateCommit[arrayDates[index]].date
          : `loading...`}
      </p>
    </StyledRightContainer>
  );
};
