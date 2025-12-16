import type { ResultsArts } from "../types/schemas";

export default function ArtworkCard({ artwork }: { artwork: ResultsArts }) {
  return (
    <>
      <div>
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{artwork.title}</h2>
            <p>{artwork.date_display}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
