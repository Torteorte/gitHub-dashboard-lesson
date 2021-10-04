import React from 'react';
import { StyledContainer, StyledIcon, StyledParagraph } from './styled';
import tumbleweed from '../../assets/tumbleweed.png';

export const PageNotFound: React.FC = () => {
  return (
    <StyledContainer>
      <h1>The page does not exist</h1>
      <StyledParagraph>Try another one</StyledParagraph>
      <StyledIcon src={tumbleweed} alt="tumbleweed" />
    </StyledContainer>
  );
};
