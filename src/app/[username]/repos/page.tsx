import { Repo } from "@/lib/types/apiTypes";
import ReposView from "@/views/repos";

export default async function Repos() {
  const repos: Repo[] = [
    {
      name: "test-typescript",
      description: "Descrição do repositório",
      lang: "Typescript",
      link: "exemplo.com.br",
      rating: 4,
      owner: {},
    },
    {
      name: "test-typescript",
      description: "Descrição do repositório",
      lang: "Typescript",
      link: "exemplo.com.br",
      rating: 4,
      owner: {},
    },
    {
      name: "test-typescript",
      description: "Descrição do repositório",
      lang: "Typescript",
      link: "exemplo.com.br",
      rating: 4,
      owner: {},
    },
    {
      name: "test-typescript",
      description: "Descrição do repositório",
      lang: "Typescript",
      link: "exemplo.com.br",
      rating: 4,
      owner: {},
    },
    {
      name: "test-typescript",
      description: "Descrição do repositório",
      lang: "Typescript",
      link: "exemplo.com.br",
      rating: 4,
      owner: {},
    },
  ];

  return <ReposView repos={repos} />;
}
