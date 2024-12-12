"use client";

import PagesErrorBoundary from "@/components/error/PagesErrorBoundary";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <PagesErrorBoundary error={error} reset={reset} />;
}
