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

export default function HomeView() {
  const { searchUser } = useSearch();

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
          <GitHub sx={{ width: 200, height: 200 }} />
          <Typography
            variant="h1"
            color="initial"
            textAlign="center"
            fontWeight={700}
          >
            GitHub
            <Typography
              component="span"
              variant="h1"
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
      </Box>
    </Container>
  );
}
