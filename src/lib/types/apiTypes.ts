export type UserDetailResponse = {
  name: string;
  followers: number;
  following: number;
  image?: string;
  email?: string;
  bio?: string;
};

export type Repo = {
  name: string;
  description: string;
  stars: number;
  lang: string;
  link?: string;
  owner: Pick<UserDetailResponse, "image">;
};
