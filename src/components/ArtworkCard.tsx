import type { ResultsArts } from "../types/schemas";

// const AIC_IMAGE_SERVER =
//   "https://www.artic.edu/iiif/2/{identifier}/full/400,/0/default.jpg";

export default function ArtworkCard({ artwork }: { artwork: ResultsArts }) {
  return (
    <>
      <div>
        <div className="card bg-base-400 p-5 m-2 bg-gray-200 shadow-xl">
          <figure>
            <img
              src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
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
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Add</button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
