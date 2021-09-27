import axios from "axios";
import {repositoryCommitsAC, repositoryContributorsAC, repositoryInfoAC, repositoryLanguagesAC} from "./actions";

export const setRepositoryInfoThunk = (userName: string, repositoryName: string) => async (dispatch: any) => {
    let response = await axios.get(`https://api.github.com/repos/${userName}/${repositoryName}`)
    dispatch(repositoryInfoAC(response.data));
};

export const setRepositoryCommitsThunk = (userName: string, repositoryName: string) => async (dispatch: any) => {
    let response = await axios.get(`https://api.github.com/repos/${userName}/${repositoryName}/commits`)
    dispatch(repositoryCommitsAC(response.data));
};

export const setRepositoryLanguagesThunk = (userName: string, repositoryName: string) => async (dispatch: any) => {
    let response = await axios.get(`https://api.github.com/repos/${userName}/${repositoryName}/languages`)
    dispatch(repositoryLanguagesAC(response.data));
};

export const setRepositoryContributorThunk = (userName: string, repositoryName: string) => async (dispatch: any) => {
    let response = await axios.get(`https://api.github.com/repos/${userName}/${repositoryName}/contributors`)
    dispatch(repositoryContributorsAC(response.data.slice(0, 10)));
};