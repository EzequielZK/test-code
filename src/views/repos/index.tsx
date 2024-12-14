"use client";

import DataContainer from "@/components/dataContainer";
import { Repo, ReposResponse } from "@/lib/types/apiTypes";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Star from "@mui/icons-material/Star";
import Link from "next/link";
import Code from "@mui/icons-material/Code";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Pagination from "@mui/material/Pagination";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useMediaQuery, useTheme, Avatar } from "@mui/material";

type ReposViewProps = {
  repos: ReposResponse;
};

export default function ReposView({ repos }: ReposViewProps) {
  const route = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));

  const searchOrderBy = searchParams.get("orderBy") ?? "rating";
  const searchOrderStyle = searchParams.get("orderStyle") ?? "desc";

  const page = searchParams.get("page") ?? 1;

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
      }&orderStyle=${orderStyle ?? searchOrderStyle}&page=${page}`
    );
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    route.replace(
      `/${params.username}/repos?orderBy=${searchOrderBy}&orderStyle=${searchOrderStyle}&page=${value}`
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
        {repos.data.map((repo, index) => (
          <Box key={index} display="flex" flexDirection="column" gap={2}>
            <Box>
              <Typography variant={match ? "h6" : "h5"} fontWeight={700}>
                {" "}
                {repo.name}
              </Typography>

              <Typography variant="subtitle2">{repo.description}</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Box display="flex" alignItems="center" gap={2}>
                {repo.lang && (
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <Code fontSize="small" />
                    <Typography variant="caption">{repo.lang}</Typography>
                  </Box>
                )}

                <Box display="flex" alignItems="center">
                  <Star fontSize="small" sx={{ color: "yellow" }} />
                  <Typography variant="caption">{repo.stars}</Typography>
                </Box>
              </Box>
              <Link href={`/${params.username}/repos/${repo.name}`}>
                <Button variant="text" color="primary">
                  Ver Detalhes
                </Button>
              </Link>
            </Box>
            <Divider />
          </Box>
        ))}
        <Pagination
          count={repos.totalItems}
          color="primary"
          defaultValue={Number(page)}
          page={Number(page)}
          onChange={handleChangePage}
          sx={{ alignSelf: "center" }}
        />
      </Box>
    </DataContainer>
  );
}
