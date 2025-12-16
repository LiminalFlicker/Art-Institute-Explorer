import { z } from "zod";

export const ArtworkSchema = z.object({
  id: z.number(),
  title: z.string(),
  artist_title: z.string(),
  image_id: z.number(),
  short_description: z.string().optional(),
});

export const qResultsArtsSchema = z.object({
  id: z.number(),
  api_link: z.string(),
  title: z.string(),
  date_display: z.string().optional(),
  artist_display: z.string().optional(),
  thumbnail: z.object({ lqip: z.url() }),
  //   short_description: z.string().optional(),
  short_description: z.string().nullable().default("No descrioptin"),
  artist_title: z.string().optional(),
});

export const qResultsArtsSchemaArray = z.array(qResultsArtsSchema);

export type ResultsArtsArray = z.infer<typeof qResultsArtsSchemaArray>;
export type ResultsArts = z.infer<typeof qResultsArtsSchema>;
export type Artwork = z.infer<typeof ArtworkSchema>;

//https://api.artic.edu/api/v1/artworks/search?q=picasso&fields=id,title,artist_display,date_display,main_reference_number
//https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number
//https://api.artic.edu/api/v1/artworks/search?q=picasso&fields=id,title,artist_display,date_display,api_link,%20thumbnail,short_description,artist_title

// {
// "preference": null,
// "pagination": {
// "total": 407,
// "limit": 10,
// "offset": 0,
// "total_pages": 41,
// "current_page": 1
// },
// "data": [
// {
// "_score": 195.92532,
// "id": 28067,
// "api_link": "https://api.artic.edu/api/v1/artworks/28067",
// "title": "The Old Guitarist",
// "thumbnail": {
// "lqip": "data:image/gif;base64,R0lGODlhAwAFAPMAAC84OzA3NzU4NTI5Ois9TTdAQj9JRjhGTD9MSzxKTD5MT0BNS0VaYURaY1FnbgAAACH5BAAAAAAALAAAAAADAAUAAAQL0DXQTiBLKDNQKhEAOw==",
// "width": 10727,
// "height": 15979,
// "alt_text": "Painting, mostly in shades of blue, of a thin, bent, older man wearing ragged clothes and sitting cross-legged playing a guitar positioned upright in his lap."
// },
// "date_display": "late 1903–early 1904",
// "artist_display": "Pablo Picasso\nSpanish, active France, 1881–1973",
// "short_description": "This famous work is from Picasso’s Blue Period (1901–04), a time the artist restricted himself to a cold, monochromatic blue palette and flattened forms to convey the themes of misery and alienation. The elongated figure also reflects his interest in the great 16th-century Spanish artist El Greco. The 22-year-old Picasso had sympathy for the downtrodden; at the time, knew what it meant to be penniless.",
// "artist_title": "Pablo Picasso"
// },
