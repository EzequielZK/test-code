import { Repo } from "@/lib/types/apiTypes";
import RepoDetailsView from "@/views/repoDetails";
import axios from "axios";

export default async function RepoDetails({
  params,
}: {
  params: { name: string; username: string };
}) {
  const { name, username } = await params;
  const response = await axios(
    `https://api.github.com/repos/${username}/${name}`
  );
  const repo: Repo = {
    name: response.data.name,
    description: response.data.description,
    lang: response.data.language,
    link: response.data.html_url,
    stars: response.data.stargazers_count,
    owner: { image: response.data.owner.avatar_url },
  };

  return <RepoDetailsView repo={repo} />;
}
