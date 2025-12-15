import { ArtworkSchema, ResultsArts } from "./types/schemas.ts";

export async function searchArtwork({
  api_url = "https://api.artic.edu/api/v1/artworks/search",
  query = "?q=picasso",
}: {
  api_url: string;
  query: string;
}): Promise<ResultsArts> {
  const response = await fetch();
}
