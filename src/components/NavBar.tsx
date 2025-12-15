import { type FormEventHandler } from "react";

export default function NavBar() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const searchQuery = new FormData(event.currentTarget).get("searchArt");
    if (searchQuery) {
      console.log(searchQuery);
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
            className="input input-bordered w-24 md:w-auto"
          />
          <button type="submit" className="btn ml-3">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
