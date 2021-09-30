import axios from 'axios';
import { setDefaultReposAC, setCommitDateAC, setLoaded } from './actions';

export const setRepositoriesThunk =
  (pageSearch: number, nameSearch: string) =>
  async (dispatch: any): Promise<void> => {
    dispatch(setLoaded(false));
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${nameSearch}&sort=stars&per_page=10&page=${pageSearch}`
    );
    dispatch(setDefaultReposAC(response.data));
  };

export const setCommitsThunk =
  (fullName: any) =>
  async (dispatch: any): Promise<void> => {
    const response = await axios.get(
      `https://api.github.com/repos/${fullName}/commits`
    );
    const date = response.data[0].commit.author.date;
    // console.log(date);
    dispatch(setCommitDateAC(fullName, date));
  };
