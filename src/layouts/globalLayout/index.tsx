"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { useRouter } from "next/navigation";
import useDebounce from "@/lib/hooks/useDebounce";

export default function GlobalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const route = useRouter();
  const { debounce, loading } = useDebounce();
  const searchUser = (value: string) => {
    route.push(`/${value}`);
  };

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
                  console.log("OIII");
                  searchUser(event.target.value);
                }, 1000)();
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
}
