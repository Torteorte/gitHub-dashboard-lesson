export interface IRepository {
  name: string;
  full_name: string;
  stars: string | number;
}

export interface IContributor {
  id: string | number;
  htmlUrl: string;
  login: string;
  avatarUrl: string;
}

export interface IUser {
  userName: string;
  reposName: string;
  htmlUrl: string;
  avatarUrl: string;
  stars: string | number;
  description: string;
}
