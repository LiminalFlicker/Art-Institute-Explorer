import { type FormEventHandler } from "react";
import { searchArtwork } from "../utils/apiHelper";
import { useContext } from "react";
import { ArtContext } from "../contexts/ArtContext";

export default function NavBar() {
  const { updateResults } = useContext(ArtContext);

  const queryFields =
    "&fields=id,title,artist_display,date_display,api_link,%20thumbnail,short_description,artist_title";

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
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Art Explorer</a>
      </div>
      <div className="flex gap-2">
        <form action="submit" onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchArt"
            placeholder="Search Art"
            className="input input-bordered w-65 md:w-auto"
          />
          <button type="submit" className="btn ml-3">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
