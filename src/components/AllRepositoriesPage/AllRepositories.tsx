import React from 'react';

import { StyledMain } from './styled';
import axios from 'axios';

const Header: React.FC = () => {
  const [listRepos, setlistRepos] = React.useState([]);
  // const [list, setlist] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        'https://api.github.com/search/repositories?q=stars&sort=stars&per_page=10'
      )
      .then((response) => {
        setlistRepos(response.data.items);
      });
  }, []);

  console.log(listRepos);
  // console.log(list);

  const listRepositories = listRepos.map((obj: any) => (
    <li key={obj.id}>
      <div>
        <h3>{obj.owner.login}</h3>
        <p>
          <a href={`https://github.com/${obj.owner.login}/${obj.name}`}>
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="octicon octicon-repo mr-1 color-text-secondary"
            >
              <path
                fillRule="evenodd"
                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
              ></path>
            </svg>{' '}
            {obj.owner.login}/<span>{obj.name}</span>
          </a>
        </p>
      </div>
      <div>
        <p>
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="octicon octicon-star"
          >
            <path
              fillRule="evenodd"
              d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
            ></path>
          </svg>{' '}
          Stars {obj.stargazers_count}
        </p>
        <p>Last commit: {obj.commits_url}</p>
      </div>
    </li>
  ));

  // const urls = listRepos.map((obj: any) => obj.full_name);
  // console.log(urls[1]);
  //
  // React.useEffect(() => {
  //   // if (!urls) {
  //   //   return;
  //   // }
  //   axios
  //     .get(`https://api.github.com/repos/urls[1]/commits`)
  //     .then((response) => {
  //       setlist(response.data);
  //     });
  // }, []);
  //
  // console.log(list);

  return (
    <StyledMain>
      <h2>List of repositories</h2>
      <ul>{listRepositories}</ul>
    </StyledMain>
  );
};

export default Header;
