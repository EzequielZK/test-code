"use client";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import Error from "@mui/icons-material/Error";

export default function ErrorPage() {
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
            <Error sx={{ width: 200, height: 200 }} />
            <Typography variant="h3" textAlign="center">
              Ocorreu um erro interno. Tente novamente mais tarde
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
