"use client";

import DataContainer from "@/components/dataContainer";
import { Repo } from "@/lib/types/apiTypes";
import Code from "@mui/icons-material/Code";
import Star from "@mui/icons-material/Star";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Launch from "@mui/icons-material/Launch";
import Link from "next/link";

type RepoDetailsView = {
  repo: Repo;
};

export default function RepoDetailsView({ repo }: RepoDetailsView) {
  return (
    <DataContainer>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Box display="flex" gap={1}>
          <Avatar
            src={repo.owner.image}
            alt="Avatar do usuário"
            sx={{ width: 60, height: 60 }}
          />
          <Box display="flex" flexDirection="column" gap={2}>
            <Box>
              <Typography variant="h5" fontWeight={700}>
                {repo.name}
              </Typography>
              <Typography>{repo.description}</Typography>
            </Box>
            <Box display="flex" gap={2}>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Code fontSize="small" />
                <Typography variant="caption">{repo.lang}</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Star fontSize="small" sx={{ color: "yellow" }} />
                <Typography variant="caption">{repo.stars}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Link href={repo.link!} target="_blank">
          <Button variant="text" color="primary" endIcon={<Launch />}>
            Veja no GitHub
          </Button>
        </Link>
      </Box>
    </DataContainer>
  );
}
