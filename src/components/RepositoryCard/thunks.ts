import axios from 'axios';
import {
  repositoryCommitsAC,
  repositoryContributorsAC,
  repositoryInfoAC,
  repositoryLanguagesAC,
  setLoaded
} from './actions';
import { Dispatch } from 'redux';
import { IContributor, IUser } from '../../common/utils/types';

export const setRepositoryThunk =
  (repositoryName: string, setErrorStatus: any) =>
  async (dispatch: Dispatch) => {
    dispatch(setLoaded(false));
    await axios
      .get(`https://api.github.com/repos/${repositoryName}`)
      .then((responseUser) => {
        const userData = responseUser.data;
        const contributeItem: IUser = {
          userName: userData.owner.login,
          reposName: userData.name,
          htmlUrl: userData.html_url,
          avatarUrl: userData.owner.avatar_url,
          stars: userData.stargazers_count,
          description: userData.description
        };
        dispatch(repositoryInfoAC(contributeItem));
      })
      .catch(function (error) {
        if (error.response.status) {
          setErrorStatus(true);
        }
      });
  };

export const setResponseCommitsThunk =
  (repositoryName: string) => async (dispatch: Dispatch) => {
    const responseCommits = await axios.get(
      `https://api.github.com/repos/${repositoryName}/commits`
    );
    dispatch(
      repositoryCommitsAC(
        responseCommits.data[0].commit.author.date.slice(0, 10)
      )
    );
  };

export const setResponseLanguageThunk =
  (repositoryName: string) => async (dispatch: Dispatch) => {
    const responseLanguage = await axios.get(
      `https://api.github.com/repos/${repositoryName}/languages`
    );
    dispatch(repositoryLanguagesAC(responseLanguage.data));
  };

export const setContributorsThunk =
  (repositoryName: string) => async (dispatch: Dispatch) => {
    const responseContributes = await axios.get(
      `https://api.github.com/repos/${repositoryName}/contributors`
    );
    const arrayContributors = responseContributes.data
      .slice(0, 10)
      .map((user: Record<string, string>) => {
        const contributeItem: IContributor = {
          id: user.id,
          htmlUrl: user.html_url,
          login: user.login,
          avatarUrl: user.avatar_url
        };
        return contributeItem;
      });

    dispatch(repositoryContributorsAC(arrayContributors));
  };
