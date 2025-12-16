import type { ResultsArts } from "../types/schemas.ts";
import { qResultsArtsSchemaArray } from "../types/schemas.ts";
import { z } from "zod";

export async function searchArtwork({
  api_url = "https://api.artic.edu/api/v1/artworks/search",
  query = "?q=picasso&fields=id,title,artist_display,date_display,api_link,%20thumbnail, short_description",
}: {
  api_url: string;
  query: string;
}): Promise<ResultsArts[]> {
  const response = await fetch(api_url + query);

  if (!response.ok) throw new Error(`Fetch error: ${response.status}`);

  const resData = await response.json();
  console.log(resData);

  const { data, error, success } = qResultsArtsSchemaArray.safeParse(
    resData.data
  );

  if (!success) throw new Error(z.prettifyError(error));
  return data;
}

//https://api.artic.edu/api/v1/artworks/search?q=picasso&fields=id,title,artist_display,date_display,api_link,%20thumbnail
