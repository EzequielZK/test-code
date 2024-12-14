"use client";

import GitHub from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Search from "@mui/icons-material/Search";
import useSearch from "@/lib/hooks/useSearch";
import { ChangeEvent, FormEvent, KeyboardEvent } from "react";
import homeStyles from "./home.module.css";
import {
  useMediaQuery,
  useTheme,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";
import useFavorite from "@/lib/hooks/useFavorite";
import Close from "@mui/icons-material/Close";
import Link from "next/link";

export default function HomeView() {
  const { searchUser } = useSearch();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));

  const { removeFromFavorites } = useFavorite();

  const handleOnEnterInput = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      const target = event.target as HTMLInputElement;

      searchUser(target.value);
    }
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    searchUser(data.search);
  };

  const favorites = JSON.parse(localStorage.getItem("favorites")!);

  return (
    <Container maxWidth="sm">
      <Box
        pt={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <GitHub
            sx={{ width: { xs: 160, sm: 200 }, height: { xs: 160, sm: 200 } }}
          />
          <Typography
            variant={match ? "h4" : "h1"}
            color="initial"
            textAlign="center"
            fontWeight={700}
          >
            GitHub
            <Typography
              component="span"
              variant={match ? "h4" : "h1"}
              textAlign="center"
              fontWeight={400}
            >
              Researcher
            </Typography>
          </Typography>
        </Box>
        <form onSubmit={submit} className={homeStyles.form}>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              name="search"
              fullWidth
              id="search-user-input"
              label="Pesquisar por usuário"
              onKeyDown={handleOnEnterInput}
              onChange={(event) => event.target}
              InputProps={{ endAdornment: <Search /> }}
            />
            <Button fullWidth variant="contained" color="primary" type="submit">
              Pesquisar
            </Button>
          </Box>
        </form>
        {favorites.length ? (
          <Box
            alignSelf="flex-start"
            display="flex"
            flexDirection="column"
            gap={2}
          >
            <Typography variant="h4" fontWeight={700}>
              Favoritos
            </Typography>
            <Box display="flex" gap={2} flexWrap="wrap">
              {favorites.map((user: any) => (
                <Link key={user.login} href={`/${user.login}`}>
                  <Chip
                    key={user.login}
                    component="div"
                    variant="filled"
                    deleteIcon={
                      <Tooltip title="Remover dos favoritos">
                        <Close fontSize="small" />
                      </Tooltip>
                    }
                    onDelete={(event) => {
                      event.preventDefault();
                      removeFromFavorites(user);
                    }}
                    label={
                      <Box display="flex" alignItems="center" gap={1}>
                        <Avatar
                          variant="circular"
                          src={user.image}
                          alt={`Avatar de ${user.login}`}
                          sx={{ width: 24, height: 24 }}
                        />{" "}
                        <Typography variant="subtitle2" color="initial">
                          {user.login}
                        </Typography>
                      </Box>
                    }
                    sx={{
                      justifyContent: "flex-start",
                      "& .MuiChip-label": { width: "100%" },
                    }}
                  />
                </Link>
              ))}
            </Box>
          </Box>
        ) : null}
      </Box>
    </Container>
  );
}
