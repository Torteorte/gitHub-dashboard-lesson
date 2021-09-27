import React from 'react';
import "./App.css";
import Header from "./Header/Header";
// import AllRepositories from "./AllRepositoriesPage/AllRepositories";
import RepositoryCard from "./RepositoryCard/RepositoryCard";


const App: React.FC = () => {
  return (
    <div className="App">
        <Header />
        {/*<AllRepositories />*/}
        <RepositoryCard />
    </div>
  );
};

export default App;
