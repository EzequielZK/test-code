"use client";

import NotFoundErrorPage from "@/components/error/NotFoundErrorPage";

export default function Error({
  error,
  reset,
}: {
  error: Error & { status: number };
  reset: () => void;
}) {
  return <NotFoundErrorPage error={error} reset={reset} />;
}
