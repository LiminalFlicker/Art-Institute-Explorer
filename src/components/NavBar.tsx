import { type FormEventHandler } from "react";
import { searchArtwork } from "../utils/apiHelper";
import { useContext } from "react";
import { ArtContext } from "../contexts/ArtContext";

export default function NavBar() {
  const { updateResults } = useContext(ArtContext);

  const queryFields =
    "&fields=id,title,artist_display,date_display,api_link,%20thumbnail,short_description,artist_title,image_id";

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get("searchArt") as string;

    if (searchQuery) {
      console.log("Search: ", searchQuery);
      const results = await searchArtwork({
        api_url: "https://api.artic.edu/api/v1/artworks/search",
        query: `?q=${searchQuery}${queryFields}`,
      });
      console.log("Results returned from searchArtworks():\n", results);
      updateResults(results);
    }
  };

  return (
    <div className="navbar flex-col bg-base-100 shadow-sm mb-2">
      <h1 className="text-2xl font-serif text-shadow-2xs font-bold mt-1.5 mb-1.5">
        Art Explorer
      </h1>

      <form className="flex" action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchArt"
          placeholder="Search Art"
          className="input rounded-r-md"
        />
        <button type="submit" className="btn rounded-l-md">
          Search
        </button>
      </form>
    </div>
  );
}
