import axios from 'axios';
import { setCommitsListAC, setDefaultReposAC, setLoaded } from './actions';

export const setRepositoriesThunk =
  (pageSearch: number, nameSearch: string) => async (dispatch: any) => {
    dispatch(setLoaded(false));
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${nameSearch}&sort=stars&per_page=10&page=${pageSearch}`
    );
    dispatch(setDefaultReposAC(response.data));
  };

export const setCommitsThunk = (list: any) => async (dispatch: any) => {
  const response = await axios.get(
    `https://api.github.com/repos/${list}/commits`
  );
  dispatch(
    setCommitsListAC(
      response.data
        .slice(0, 10)
        .map((obj: any) => obj.commit.author.date.slice(0, 10))
    )
  );
};
