import React from 'react';
import { useSelector } from 'react-redux';
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
    userPageReducer: { repositoryInfo }
  }: any = useSelector((store) => store);

  return (
    <UserContainer>
      <StyledUserContainer>
        <a
          href={
            !repositoryInfo.owner
              ? 'https://github.com/'
              : repositoryInfo.owner.html_url
          }
        >
          <StyledUserAvatar
            src={
              !repositoryInfo.owner
                ? defaultImg
                : repositoryInfo.owner.avatar_url
            }
            alt="author-avatar"
          />
        </a>
        <StyledUserName>
          Author:{' '}
          {!repositoryInfo.owner ? (
            `Github User`
          ) : (
            <a href={repositoryInfo.owner.html_url}>
              {repositoryInfo.owner.login}
            </a>
          )}
        </StyledUserName>
      </StyledUserContainer>
      <StyledParagraphUser>{repositoryInfo.description}</StyledParagraphUser>
    </UserContainer>
  );
};
