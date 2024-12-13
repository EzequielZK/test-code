"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { useParams, useRouter } from "next/navigation";
import useDebounce from "@/lib/hooks/useDebounce";
import Search from "@mui/icons-material/Search";
import useSearch from "@/lib/hooks/useSearch";

export default function MainLayoutComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const params = useParams();

  const { debounce, loading } = useDebounce();
  const { searchUser } = useSearch();

  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="h6">GitHub</Typography>
            <Input
              id="search"
              placeholder="Pesquisar"
              onChange={(event) => {
                debounce(() => {
                  searchUser(event.target.value);
                }, 1000)();
              }}
              endAdornment={<Search />}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        id="main-container"
        overflow="auto"
        maxHeight="calc(100vh - 64px)"
        height="100%"
      >
        {children}
      </Box>
    </>
  );
}