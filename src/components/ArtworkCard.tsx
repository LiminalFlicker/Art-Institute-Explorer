import type { ResultsArts } from "../types/schemas";

export default function ArtworkCard({ artwork }: { artwork: ResultsArts }) {
  return (
    <>
      <div>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{artwork.title}</h2>
            <p>
              <b>Artist: </b>
              {artwork.artist_display}
            </p>
            {artwork.short_description !== null ? (
              <p>{artwork.short_description}</p>
            ) : (
              <p>No description available</p>
            )}
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
