export type UserDetailResponse = {
  name: string;
  login: string;
  created_at: string;
  followers: number;
  following: number;
  image?: string;
  email?: string;
  bio?: string;
  public_repos: number;
  html_url: string;
};

export type FavoriteUser = Pick<UserDetailResponse, "image" | "login">;

export type Repo = {
  name: string;
  description: string;
  stars: number;
  lang: string;
  link?: string;
  owner: Pick<UserDetailResponse, "image" | "login">;
};

export type ReposResponse = {
  totalItems: number;
  data: Repo[];
};
