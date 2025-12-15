import { z } from "zod";

export const ArtworkSchema = z.object({
  id: z.number(),
  title: z.string(),
  artist_title: z.string(),
  image_id: z.number(),
  short_description: z.string(),
});

export const qResultsArtsSchema = z.object({
  id: z.number(),
  api_link: z.string(),
  title: z.string(),
  date_display: z.string(),
  artist_display: z.string(),
  thumbnail: z.url(),
});

export type ResultsArts = z.infer<typeof qResultsArtsSchema>;
export type Artwork = z.infer<typeof ArtworkSchema>;

//https://api.artic.edu/api/v1/artworks/search?q=picasso
//https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number
