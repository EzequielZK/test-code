"use client";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function PagesErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={true}
    >
      <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
        {error.message}
      </Alert>
    </Snackbar>
  );
}
