import React from 'react';
import { StyledLink } from './styled';
import { ROUTES } from '../../../common/routes/routes';

export const LoginAndRegistration: React.FC = () => {
  return (
    <>
      <StyledLink title={`Login page`} to={ROUTES.login}>
        Login
      </StyledLink>
      <StyledLink title={`Login page`} to={ROUTES.registration}>
        Registration
      </StyledLink>
    </>
  );
};
