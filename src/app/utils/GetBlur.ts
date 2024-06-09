"use server";
import path from "node:path";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export const getBlur = async (src: string) => {
  const buffer = await fs.readFile(path.join("./public", src));

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};
