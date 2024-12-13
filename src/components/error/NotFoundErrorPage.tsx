"use client";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import GitHub from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NoAccounts from "@mui/icons-material/NoAccounts";
import { useRouter } from "next/navigation";

export default function NotFoundErrorPage({
  error,
  reset,
}: {
  error: Error & { status: number };
  reset: () => void;
}) {
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
            <Typography variant="h3" color="initial" textAlign="center">
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