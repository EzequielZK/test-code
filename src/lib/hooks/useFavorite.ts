"use client";

import { useState } from "react";
import { FavoriteUser } from "../types/apiTypes";

export default function useFavorite() {
  const [favorites, setFavorites] = useState<FavoriteUser[]>([]);

  const addToFavorites = (user: FavoriteUser) => {
    const favorites: FavoriteUser[] = JSON.parse(
      localStorage.getItem("favorites")!
    );
    if (favorites) {
      favorites.push({ login: user.login, image: user.image });
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      localStorage.setItem(
        "favorites",
        JSON.stringify([{ login: user.login, image: user.image }])
      );
    }
    setFavorites(favorites);
  };

  const removeFromFavorites = (user: FavoriteUser) => {
    const favorites: FavoriteUser[] = JSON.parse(
      localStorage.getItem("favorites")!
    );
    const newFavorites = favorites.filter(
      (favorite) => favorite.login !== user.login
    );

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavorites(favorites);
  };

  return { favorites, addToFavorites, removeFromFavorites };
}
