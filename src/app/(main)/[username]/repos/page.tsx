import { Repo, ReposResponse } from "@/lib/types/apiTypes";
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
  const { perPage = 10, page = 1 } = await searchParams;
  const response = await axios(
    `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`
  );

  let totalItems = response.data.length;

  const linkHeader = response.headers.link;

  if (linkHeader) {
    const lastPageMatch = linkHeader.match(/&page=(\d+)>; rel="last"/);
    const prevPageMatch = linkHeader.match(/&page=(\d+)>; rel="prev"/);
    const lastPage = lastPageMatch
      ? parseInt(lastPageMatch[1], 10)
      : prevPageMatch
      ? parseInt(prevPageMatch[1], 10) + 1
      : 1;

    totalItems = lastPage;
  }

  const { orderBy = "rating", orderStyle = "desc" } = await searchParams;
  const repos: ReposResponse = {
    totalItems,
    data: response.data.map((data: Repo) => ({
      name: data.name,
      description: data.description,
      language: data.language,
      stargazers_count: data.stargazers_count,
    })),
  };

  const orderByFilters = {
    rating: () => orderByRating(repos.data, orderStyle),
  };

  const orderedRepos = orderByFilters[orderBy as keyof typeof orderByFilters]();

  return <ReposView repos={{ totalItems, data: orderedRepos }} />;
}

function orderByRating(repos: Repo[], orderStyle: string): Repo[] {
  const orderStyles = {
    asc: () => repos.sort((a, b) => a.stargazers_count - b.stargazers_count),
    desc: () => repos.sort((a, b) => b.stargazers_count - a.stargazers_count),
  };

  return orderStyles[orderStyle as keyof typeof orderStyles]();
}
