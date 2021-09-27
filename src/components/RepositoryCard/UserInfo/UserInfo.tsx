import React from 'react';

import defaultImg from '../../../assets/default-git-hub-img.png';
import { UserContainer, StyledParagraphUser, StyledUser } from './styled';
import { useSelector } from 'react-redux';

const UserInfo: React.FC = () => {
  const {
    userPageReducer: { userName, repositoryInfo }
  }: any = useSelector((store) => store);

  return (
    <UserContainer>
      <StyledUser>
        <a
          href={
            !repositoryInfo.owner
              ? 'https://github.com/'
              : repositoryInfo.owner.html_url
          }
        >
          <img
            src={
              !repositoryInfo.owner
                ? defaultImg
                : repositoryInfo.owner.avatar_url
            }
            alt="author-avatar"
          />
        </a>
        <p>
          Author:{' '}
          <a
            href={
              !repositoryInfo.owner ? userName : repositoryInfo.owner.html_url
            }
          >
            {!repositoryInfo.owner ? userName : repositoryInfo.owner.login}
          </a>
        </p>
      </StyledUser>
      <StyledParagraphUser>{repositoryInfo.description}</StyledParagraphUser>
    </UserContainer>
  );
};

export default UserInfo;