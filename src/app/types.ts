export interface IUser {
  public_repos: number;
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string;
  followers: number;
  following: number;
  html_url: string;
}
export interface IStrippedDownUser {
  login: string;
  id: number;
}

export interface IRepository {
  id: number;
  name: string;
  description: null | string;
}
