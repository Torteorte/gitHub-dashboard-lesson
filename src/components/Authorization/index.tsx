import React from 'react';
import { GitHubLogo } from './GithubLogo/GithubLogo';
import { AuthFieldForm } from './AuthFildForm/AuthFieldForm';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../common/routes/routes';
import { loginUserAC } from './actions';

export const Authorization: React.FC = () => {
  const dispatch = useDispatch();
  const {
    authReducer: { isAuth }
  }: RootStateOrAny = useSelector((store) => store);

  const handlerLogin = (isAuth: boolean) => {
    dispatch(loginUserAC(isAuth));
  };

  if (isAuth) {
    // return <Redirect to={ROUTES.userPage} />;
    return <Redirect to={ROUTES.allRepos} />;
  }

  return (
    <>
      <GitHubLogo />
      <AuthFieldForm handlerLogin={handlerLogin} />
    </>
  );
};
