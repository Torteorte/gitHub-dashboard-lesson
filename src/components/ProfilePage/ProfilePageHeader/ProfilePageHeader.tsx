import React from 'react';
import { StyledSuperscript, StyledUserName } from './styled';

export const ProfilePageHeader: React.FC = () => {
  return (
    <header>
      <h2>
        Profile:{' '}
        <StyledUserName>
          username<StyledSuperscript>online</StyledSuperscript>
        </StyledUserName>
      </h2>
    </header>
  );
};
