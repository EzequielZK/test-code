"use client";

import NotFoundErrorPage from "@/components/error/NotFoundErrorPage";

export default function Error({
  error,
}: {
  error: Error & { status: number };
}) {
  return <NotFoundErrorPage error={error} />;
}
