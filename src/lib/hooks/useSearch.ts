"use client";

import { useRouter } from "next/navigation";

export default function useSearch() {
  const route = useRouter();

  const searchUser = (value: string) => {
    route.push(`/${value}`);
  };

  return { searchUser };
}
