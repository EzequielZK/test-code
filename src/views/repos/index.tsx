"use client";

import DataContainer from "@/components/dataContainer";
import { Repo } from "@/lib/types/apiTypes";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Star from "@mui/icons-material/Star";
import Link from "next/link";
import Code from "@mui/icons-material/Code";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { useParams, useRouter, useSearchParams } from "next/navigation";

type ReposViewProps = {
  repos: Repo[];
};

export default function ReposView({ repos }: ReposViewProps) {
  const route = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const searchOrderBy = searchParams.get("orderBy") ?? "rating";
  const searchOrderStyle = searchParams.get("orderStyle") ?? "desc";

  const filterRepoList = ({
    orderBy,
    orderStyle,
  }: {
    orderBy?: string;
    orderStyle?: string;
  }) => {
    route.replace(
      `/${params.username}/repos?orderBy=${
        orderBy ?? searchOrderBy
      }&orderStyle=${orderStyle ?? searchOrderStyle}`
    );
  };

  return (
    <DataContainer
      title="Repositórios"
      subtitle="Selecione um repositório para conferir seus detalhes e acessá-lo diretamente pelo link"
    >
      <Box pt={3} display="flex" flexDirection="column" gap={2}>
        <Box display="flex" gap={2}>
          <TextField
            select
            value={searchOrderBy}
            id="order-by-select"
            label="Ordenar por"
            onChange={(event) =>
              filterRepoList({ orderBy: event.target.value })
            }
          >
            <MenuItem value="rating">Avaliação</MenuItem>
          </TextField>

          <TextField
            select
            value={searchOrderStyle}
            id="order-by-select"
            label="Ordem"
            onChange={(event) =>
              filterRepoList({ orderStyle: event.target.value })
            }
          >
            <MenuItem value="asc">Crescente</MenuItem>
            <MenuItem value="desc">Decrescente</MenuItem>
          </TextField>
        </Box>
        {repos.map((repo, index) => (
          <Box key={index} display="flex" flexDirection="column" gap={2}>
            <Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h5" fontWeight={700}>
                  {" "}
                  {repo.name}
                </Typography>
                <Link href={`/${params.username}/repos/${repo.name}`}>
                  <Button variant="text" color="primary">
                    Ver Detalhes
                  </Button>
                </Link>
              </Box>
              <Typography variant="subtitle2">{repo.description}</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={2}>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Code fontSize="small" />
                <Typography variant="caption">{repo.lang}</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Star fontSize="small" sx={{ color: "yellow" }} />
                <Typography variant="caption">{repo.stars}</Typography>
              </Box>
            </Box>
            <Divider />
          </Box>
        ))}
      </Box>
    </DataContainer>
  );
}
