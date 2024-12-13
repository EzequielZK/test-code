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

export type UsersListResponse = Array<{
  id: number;
  login: string;
  image?: string;
}>;

export type Repo = {
  name: string;
  description: string;
  stars: number;
  lang: string;
  link?: string;
  owner: Pick<UserDetailResponse, "image">;
};

export type ReposResponse = {
  totalItems: number;
  data: Repo[];
};
