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

  //Check the last page for a total pages purpose
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
    data: response.data.map((data: any) => ({
      name: data.name,
      description: data.description,
      lang: data.language,
      stars: data.stargazers_count,
      owner: { name: data.owner.name },
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
    asc: () => repos.sort((a, b) => a.stars - b.stars),
    desc: () => repos.sort((a, b) => b.stars - a.stars),
  };

  return orderStyles[orderStyle as keyof typeof orderStyles]();
}
