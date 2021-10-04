import React from 'react';
import {
  StyledHeader,
  StyledLinkToCard,
  StyledLinkToLogin,
  StyledTitle
} from './styled';
import { ROUTES } from '../../common/routes/routes';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { UserIsAuthContainer } from './UserIsAuth/UserIsAuthContainer';
import { logoutUserAC } from '../Authorization/actions';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const {
    authReducer: { isAuth }
  }: RootStateOrAny = useSelector((store) => store);

  const handlerLogout = (isAuth: boolean) => {
    dispatch(logoutUserAC(isAuth));
  };

  return (
    <StyledHeader>
      <StyledTitle>GitHub Dashboard</StyledTitle>
      <StyledLinkToCard title={`To all repositories`} to={ROUTES.allRepos}>
        To All Repositories
      </StyledLinkToCard>
      {!isAuth ? (
        <StyledLinkToLogin title={`Login page`} to={ROUTES.login}>
          Login
        </StyledLinkToLogin>
      ) : (
        <UserIsAuthContainer handlerLogout={handlerLogout} />
      )}
    </StyledHeader>
  );
};
