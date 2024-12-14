"use client";

import { UserDetailResponse } from "@/lib/types/apiTypes";
import Group from "@mui/icons-material/Group";
import Mail from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DataContainer from "@/components/dataContainer";
import Link from "next/link";
import { useParams } from "next/navigation";
import Folder from "@mui/icons-material/Folder";
import { format } from "date-fns";
import GitHub from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Tooltip from "@mui/material/Tooltip";
import Favorite from "@mui/icons-material/Favorite";
import useFavorite from "@/lib/hooks/useFavorite";
import useIsFavorite from "@/lib/hooks/useIsFavorite";

type UserSearchViewProps = {
  user: UserDetailResponse;
};

export default function UserSearchView({ user }: UserSearchViewProps) {
  const params = useParams();

  const { addToFavorites, removeFromFavorites } = useFavorite();
  const { isFavorite } = useIsFavorite(user);

  const addFavorite = () => {
    addToFavorites(user);
  };

  const removeFavorite = () => {
    removeFromFavorites(user);
  };

  return (
    <DataContainer>
      <Box position="relative">
        <Tooltip title="Adicionar aos Favoritos">
          <IconButton
            aria-label="Favorito"
            onClick={isFavorite ? removeFavorite : addFavorite}
            sx={{ position: "absolute", right: 10 }}
          >
            {isFavorite ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </Tooltip>

        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Avatar
            alt={`Avatar de ${user.name}`}
            src={user.image}
            sx={{ width: 120, height: 120 }}
          />

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            // width="100%"
          >
            <Box display="flex" flexDirection="column" gap={2}>
              <Box>
                <Typography variant="h5" textAlign="center" fontWeight={700}>
                  {" "}
                  {user.name}
                </Typography>
                <Typography
                  variant="body1"
                  color="textDisabled"
                  textAlign="center"
                >
                  {" "}
                  {user.login}
                </Typography>
              </Box>
              <Typography variant="subtitle2" textAlign="center">
                Usuário desde: {format(new Date(user.created_at), "dd/MM/yyyy")}
              </Typography>
              <Box
                display="flex"
                justifyContent={{ xs: "center", sm: "space-between" }}
                gap={{ xs: 2, sm: 4 }}
                flexWrap="wrap"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                >
                  <Group />
                  <Typography variant="subtitle2">
                    {user.followers} - Seguidor | Seguindo - {user.following}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                >
                  <Mail />
                  {user.email ? (
                    <Typography variant="subtitle2">{user.email}</Typography>
                  ) : (
                    <Typography variant="subtitle2" fontStyle="italic">
                      {"<E-mail não informado>"}
                    </Typography>
                  )}
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                >
                  <Folder />
                  <Typography variant="subtitle2">
                    {user.public_repos} Repositórios públicos
                  </Typography>
                </Box>
              </Box>
            </Box>
            {user.bio ? (
              <Typography variant="body1" textAlign="center" color="initial">
                {" "}
                {user.bio}
              </Typography>
            ) : (
              <Typography
                variant="body1"
                textAlign="center"
                fontStyle="italic"
                color="initial"
              >
                {"<Sem informações na bio deste usuário>"}
              </Typography>
            )}
            <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
              <Link href={user.html_url} target="_blank">
                <Button
                  fullWidth
                  startIcon={<GitHub />}
                  variant="outlined"
                  color="primary"
                >
                  Ver Perfil no GitHub
                </Button>
              </Link>
              <Link
                href={`/${params.username}/repos?orderBy=rating&orderStyle=desc&page=1`}
              >
                <Button fullWidth variant="contained" color="primary">
                  Ver Repositórios
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </DataContainer>
  );
}
