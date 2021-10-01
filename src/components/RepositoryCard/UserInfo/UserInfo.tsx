import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import defaultImg from '../../../assets/default-git-hub-img.png';
import {
  UserContainer,
  StyledParagraphUser,
  StyledUserAvatar,
  StyledUserContainer,
  StyledUserName
} from './styled';

export const UserInfo: React.FC = () => {
  const {
    userPageReducer: { repositoryInfo, isLoaded }
  }: RootStateOrAny = useSelector((store) => store);

  return (
    <UserContainer>
      <StyledUserContainer>
        <a href={repositoryInfo.htmlUrl}>
          <StyledUserAvatar
            src={
              !repositoryInfo.avatarUrl ? defaultImg : repositoryInfo.avatarUrl
            }
            alt="author-avatar"
          />
        </a>
        <StyledUserName>
          Author:{' '}
          {!isLoaded ? (
            `Github User`
          ) : (
            <a href={repositoryInfo.htmlUrl}>{repositoryInfo.userName}</a>
          )}
        </StyledUserName>
      </StyledUserContainer>
      <StyledParagraphUser>{repositoryInfo.description}</StyledParagraphUser>
    </UserContainer>
  );
};
