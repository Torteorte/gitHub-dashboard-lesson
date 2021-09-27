import axios from 'axios';
import {
  repositoryCommitsAC,
  repositoryContributorsAC,
  repositoryInfoAC,
  repositoryLanguagesAC
} from './actions';

export const setRepositoryThunk =
  (userName: string, repositoryName: string) => async (dispatch: any) => {
    const response = await axios.get(
      `https://api.github.com/repos/${userName}/${repositoryName}`
    );
    dispatch(repositoryInfoAC(response.data));

    const responseCommits = await axios.get(
      `https://api.github.com/repos/${userName}/${repositoryName}/commits`
    );
    dispatch(repositoryCommitsAC(responseCommits.data));

    const responseLanguage = await axios.get(
      `https://api.github.com/repos/${userName}/${repositoryName}/languages`
    );
    dispatch(repositoryLanguagesAC(responseLanguage.data));

    const responseContributes = await axios.get(
      `https://api.github.com/repos/${userName}/${repositoryName}/contributors`
    );
    dispatch(repositoryContributorsAC(responseContributes.data.slice(0, 10)));
  };
