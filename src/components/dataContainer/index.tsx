"use client";

import { ReactNode } from "react";
import Container, { ContainerProps } from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

type DataContainerProps = {
  children: ReactNode;
  maxWidth?: ContainerProps["maxWidth"];
  title?: string;
  subtitle?: string;
};

export default function DataContainer({
  children,
  maxWidth = "md",
  title,
  subtitle,
}: DataContainerProps) {
  const route = useRouter();

  return (
    <Box position="relative">
      <Tooltip title="Voltar">
        <IconButton
          aria-label="Voltar"
          onClick={route.back}
          sx={{
            position: { xs: "unset", sm: "sticky" },
            top: 16,
            left: 16,
            my: { xs: 2, sm: 0 },
          }}
        >
          <ArrowBack />
        </IconButton>
      </Tooltip>

      <Container maxWidth={maxWidth}>
        <Paper>
          <Box p={3}>
            {title && (
              <Typography variant="h3" color="initial">
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography variant="subtitle1" color="initial">
                {subtitle}
              </Typography>
            )}
            {children}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
