import React from 'react';
import 'antd/dist/antd.css';
import { StyledAppContainer } from './styled';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './Header/Header';
import { AllRepositories } from './AllRepositoriesPage/AllRepositories';

// import RepositoryCard from './RepositoryCard/RepositoryCard';

export const App: React.FC = () => {
  return (
    <StyledAppContainer>
      <Header />
      <BrowserRouter>
        <AllRepositories />
        {/*<RepositoryCard />*/}
      </BrowserRouter>
    </StyledAppContainer>
  );
};
