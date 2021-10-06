import React from 'react';
import { StyledOtherInfoContainer } from './styled';

export const ProfilePageOtherInfo: React.FC = () => {
  return (
    <StyledOtherInfoContainer>
      <p>
        Is admin: <br />
        no
      </p>
      <p>
        Date join us: <br />
        yesterday
      </p>
      <p>
        Last login: <br />
        yesterday
      </p>
    </StyledOtherInfoContainer>
  );
};
