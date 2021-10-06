import React from 'react';
import {
  StyledMainInfoContainer,
  StyledNamesContainer,
  StyledParagraph,
  StyledUserIcon
} from './styled';

import defaultImg from '../../../../assets/default-git-hub-img.png';

export const ProfilePageMainInfo: React.FC = () => {
  return (
    <StyledMainInfoContainer>
      <StyledUserIcon src={defaultImg} alt="user avatar" />

      <StyledNamesContainer>
        <StyledParagraph>First name: Sobaka</StyledParagraph>
        <StyledParagraph>Last name: Bezpovodka</StyledParagraph>
        <StyledParagraph>Email: sobaka-bez@povodka.com</StyledParagraph>
      </StyledNamesContainer>
    </StyledMainInfoContainer>
  );
};
