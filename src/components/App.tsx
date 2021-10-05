import React from 'react';
import 'antd/dist/antd.css';
import { StyledAppContainer } from './styled';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { ROUTES } from '../common/routes/routes';
import { Header } from './Header/Header';
import { AllRepositories } from './AllRepositories';
import { RepositoryCard } from './RepositoryCard';
import { Login } from './Login';
import { PageNotFound } from './PageNotFound/PageNotFound';
import { ProfilePage } from './ProfilePage/ProfilePage';
import { Registration } from './Registration/Registration';
import { Users } from './Users/Users';
import { UserPage } from './Users/UserPage/UserPage';

export const App: React.FC = () => {
  return (
    <StyledAppContainer>
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <Redirect from="/" to={ROUTES.allRepos} />
        </Route>
        <Switch>
          <Route exact path={ROUTES.allRepos}>
            <AllRepositories />
          </Route>
          <Route exact path={ROUTES.login}>
            <Login />
          </Route>
          <Route exact path={ROUTES.registration}>
            <Registration />
          </Route>
          <Route exact path={ROUTES.profilePage}>
            <ProfilePage />
          </Route>
          <Route exact path={ROUTES.users}>
            <Users />
          </Route>
          <Route exact path={ROUTES.userPage}>
            <UserPage />
          </Route>
          <Route exact path={ROUTES.repositoryCard}>
            <RepositoryCard />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </StyledAppContainer>
  );
};
