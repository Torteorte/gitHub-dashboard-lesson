import React from 'react';
import 'antd/dist/antd.css';
import { StyledAppContainer } from './styled';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { ROUTES } from '../common/routes/routes';
import { Header } from './Header/Header';
import { AllRepositories } from './AllRepositories';
import { RepositoryCard } from './RepositoryCard';

export const App: React.FC = () => {
  return (
    <StyledAppContainer>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect from="/" to={ROUTES.allRepos} />
          </Route>
          <Route path={ROUTES.allRepos}>
            <AllRepositories />
          </Route>
          <Route path="/repository/:idUser/:idRepository">
            <RepositoryCard />
          </Route>
        </Switch>
      </BrowserRouter>
    </StyledAppContainer>
  );
};
