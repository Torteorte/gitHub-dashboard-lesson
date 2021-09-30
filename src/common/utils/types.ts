export interface IRepository {
  date: string | null;
  stars: number | unknown;
  commits_url: string | unknown;
  full_name: string | unknown;
}

export interface IGithubData {
  [key: string]: IRepository;
}
