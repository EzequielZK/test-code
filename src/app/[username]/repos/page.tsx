import { Repo } from "@/lib/types/apiTypes";
import ReposView from "@/views/repos";
import axios from "axios";

export default async function Repos({
  searchParams,
  params,
}: {
  searchParams: { [key: string]: string };
  params: { username: string };
}) {
  const { username } = await params;
  const response = await axios(
    `https://api.github.com/users/${username}/repos`
  );

  const { orderBy, orderStyle } = await searchParams;
  const repos: Repo[] = response.data.map((data: any) => ({
    name: data.name,
    description: data.description,
    lang: data.language,
    stars: data.stargazers_count,
    owner: { name: data.owner.name },
  }));

  const orderByFilters = {
    rating: () => orderByRating(repos, orderStyle),
  };

  const orderedRepos = orderByFilters[orderBy as keyof typeof orderByFilters]();

  return <ReposView repos={orderedRepos} />;
}

function orderByRating(repos: Repo[], orderStyle: string): Repo[] {
  const orderStyles = {
    asc: () => repos.sort((a, b) => a.stars - b.stars),
    desc: () => repos.sort((a, b) => b.stars - a.stars),
  };

  return orderStyles[orderStyle as keyof typeof orderStyles]();
}
