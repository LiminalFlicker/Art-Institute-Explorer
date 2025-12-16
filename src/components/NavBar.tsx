import { type FormEventHandler } from "react";
import { searchArtwork } from "../utils/apiHelper";

const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const searchQuery = formData.get("searchArt") as string;

  if (searchQuery) {
    console.log(searchQuery);
    const results = await searchArtwork({
      api_url: "https://api.artic.edu/api/v1/artworks/search",
      query: `?q=${searchQuery}`,
    });
    console.log("form", results);
  }
};

export default function NavBar() {
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
