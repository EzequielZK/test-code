"use client";

import { useState } from "react";
import { UserDetailResponse } from "../types/apiTypes";
import { useRouter } from "next/navigation";

export default function useFavorite() {
  const route = useRouter();
  const addToFavorites = (user: UserDetailResponse) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")!);
    if (favorites) {
      favorites.push({ login: user.login, image: user.image });
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      localStorage.setItem(
        "favorites",
        JSON.stringify([{ login: user.login, image: user.image }])
      );
    }
    route.refresh();
  };

  const removeFromFavorites = (user: UserDetailResponse) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")!);
    const newFavorites = favorites.filter(
      (favorite: any) => favorite.login !== user.login
    );

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    route.refresh();
  };

  return { addToFavorites, removeFromFavorites };
}
