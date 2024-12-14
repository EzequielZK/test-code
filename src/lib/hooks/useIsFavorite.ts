"use client";

import { FavoriteUser, UserDetailResponse } from "../types/apiTypes";

export default function useIsFavorite(user: UserDetailResponse) {
  const favorites: FavoriteUser[] = JSON.parse(
    localStorage.getItem("favorites")!
  );

  const isFavorite =
    favorites && favorites.find((favorite) => favorite.login === user.login);

  return { isFavorite };
}
