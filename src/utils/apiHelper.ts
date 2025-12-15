import { JSONSchema } from "zod/v4/core";
import type { Artwork, ResultsArts } from "../types/schemas.ts";
import { ArtworkSchema, qResultsArtsSchema } from "../types/schemas.ts";
import { json, z } from "zod";

export async function searchArtwork({
  api_url = "https://api.artic.edu/api/v1/artworks/search",
  query = "?q=picasso",
}: {
  api_url: string;
  query: string;
}): Promise<ResultsArts> {
  const response = await fetch(api_url + query);
  console.log(response.body);
  if (!response.ok) throw new Error(`Fetch error: ${response.status}`);
  const resData = await response.json();
  console.log(resData);
  const { data, error, success } = qResultsArtsSchema.safeParse(resData);
  if (!success) throw new Error(z.prettifyError(error));
  return jsonData;
}
