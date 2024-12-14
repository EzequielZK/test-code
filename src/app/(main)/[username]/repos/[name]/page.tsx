import { Repo } from "@/lib/types/apiTypes";
import RepoDetailsView from "@/views/repoDetails";
import axios from "axios";

export default async function RepoDetails({
  params,
}: {
  params: Promise<{ name: string; username: string }>;
}) {
  const { name, username } = await params;
  const response = await axios(
    `https://api.github.com/repos/${username}/${name}`
  );
  const repo: Repo = {
    name: response.data.name,
    description: response.data.description,
    language: response.data.language,
    link: response.data.html_url,
    stargazers_count: response.data.stargazers_count,
    owner: {
      image: response.data.owner.avatar_url,
      login: response.data.owner.login,
    },
  };

  return <RepoDetailsView repo={repo} />;
}
