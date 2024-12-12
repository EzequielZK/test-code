"use client";

import { ReactNode } from "react";
import Container, { ContainerProps } from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

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
  return (
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
  );
}
