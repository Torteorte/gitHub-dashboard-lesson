import axios from 'axios';
import { Dispatch } from 'redux';
import { setDefaultReposAC, setCommitDateAC, setLoaded } from './actions';
import { IRepository } from '../../common/utils/types';

export const setRepositoriesThunk =
  (pageSearch: number, nameSearch: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch(setLoaded(false));
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${nameSearch}&sort=stars&per_page=10&page=${pageSearch}`
    );

    const total_count = response.data.total_count;
    const itemsArray = response.data.items.map((obj: any) => {
      const repositoryItem: IRepository = {
        name: obj.owner.login,
        full_name: obj.full_name,
        stars: obj.stargazers_count
      };
      return repositoryItem;
    });

    dispatch(setDefaultReposAC(total_count, itemsArray));
  };

export const getRepositoryInfoThunk =
  (fullName: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    const response = await axios.get(
      `https://api.github.com/repos/${fullName}/commits`
    );
    const date = response.data[0].commit.author.date.slice(0, 10);
    dispatch(setCommitDateAC(fullName, date));
  };
