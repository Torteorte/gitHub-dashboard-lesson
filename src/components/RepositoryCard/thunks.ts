import axios from 'axios';
import {
  repositoryCommitsAC,
  repositoryContributorsAC,
  repositoryInfoAC,
  repositoryLanguagesAC,
  setLoaded
} from './actions';
import { Dispatch } from 'redux';

export const setRepositoryThunk =
  (repositoryName: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch(setLoaded(false));
    const response = await axios.get(
      `https://api.github.com/repos/${repositoryName}`
    );

    dispatch(repositoryInfoAC(response.data));

    const responseCommits = await axios.get(
      `https://api.github.com/repos/${repositoryName}/commits`
    );

    dispatch(
      repositoryCommitsAC(
        responseCommits.data[0].commit.author.date.slice(0, 10)
      )
    );

    const responseLanguage = await axios.get(
      `https://api.github.com/repos/${repositoryName}/languages`
    );

    dispatch(repositoryLanguagesAC(responseLanguage.data));

    const responseContributes = await axios.get(
      `https://api.github.com/repos/${repositoryName}/contributors`
    );

    dispatch(repositoryContributorsAC(responseContributes.data.slice(0, 10)));
  };
