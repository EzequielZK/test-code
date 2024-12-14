"use client";

import { useState } from "react";
import { UserDetailResponse } from "../types/apiTypes";

export default function useIsFavorite(user: UserDetailResponse) {
  const favorites = JSON.parse(localStorage.getItem("favorites")!);

  const isFavorite =
    favorites &&
    favorites.find((favorite: any) => favorite.login === user.login);

  return { isFavorite };
}
