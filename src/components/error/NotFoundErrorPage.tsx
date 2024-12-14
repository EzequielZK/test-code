"use client";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NoAccounts from "@mui/icons-material/NoAccounts";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFoundErrorPage({
  error,
}: {
  error: Error & { status: number };
}) {
  useEffect(() => {
    console.error(error.message);
  }, [error.message]);

  const route = useRouter();

  return (
    <Container maxWidth="md">
      <Box
        pt={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <NoAccounts sx={{ width: 200, height: 200 }} />
            <Typography variant="h3" textAlign="center">
              Usuário não encontrado
            </Typography>
          </Box>
          <Button fullWidth variant="contained" onClick={route.back}>
            Voltar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
