import axios from 'axios';
import { setCommitsListAC, setDefaultReposAC, setLoaded } from './actions';

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
  (name: string) =>
  async (dispatch: any): Promise<void> => {
    const response = await axios.get(`${name.split('{')[0]}`);

    console.log(
      response.data[0].commit.author.date.slice(0, 10),
      response.data[0].url
    );
    // dispatch(
    //   setCommitsListAC(response.data[0].commit.author.date.slice(0, 10))
    // );
  };
