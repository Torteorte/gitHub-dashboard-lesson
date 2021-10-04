import React from 'react';
import 'antd/dist/antd.css';
import { StyledAppContainer } from './styled';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { ROUTES } from '../common/routes/routes';
import { Header } from './Header/Header';
import { AllRepositories } from './AllRepositories';
import { RepositoryCard } from './RepositoryCard';
import { Authorization } from './Authorization';
import { PageNotFound } from './PageNotFound/PageNotFound';
import { UserPage } from './UserPage/UserPage';

export const App: React.FC = () => {
  return (
    <StyledAppContainer>
      <BrowserRouter>
        <Header />
        <Route exact path="/repository">
          <Redirect from="/repository" to={ROUTES.allRepos} />
        </Route>
        <Switch>
          <Route exact path={ROUTES.allRepos}>
            <AllRepositories />
          </Route>
          <Route exact path={ROUTES.login}>
            <Authorization />
          </Route>
          <Route exact path="/userPage">
            <UserPage />
          </Route>
          <Route exact path="/card/:idUser/:idRepository">
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
