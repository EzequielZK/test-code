"use client";

import { styled } from "@mui/material";
import Image from "next/image";

const MuiImage = styled(Image, {
  name: "MuiImage",
  slot: "root",
  overridesResolver: (props, styles) => [styles.root],
})(() => ({}));

export default MuiImage;
