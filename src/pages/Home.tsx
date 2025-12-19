import "../App.css";
import { useContext } from "react";
import { ArtContext } from "../contexts/ArtContext";
import ArtworkCard from "../components/ArtworkCard";

export default function Home() {
  const { artSearchResults } = useContext(ArtContext);

  console.log("sad", artSearchResults);

  return (
    <>
      {/* {artSearchResults.length === 0 ? (
        <h1>No art here </h1>
      ) : (
        artSearchResults.forEach((element) => {
          <ArtworkCard artwork={element} />;
        })
      )} */}
      <div className="flex flex-wrap">
        {artSearchResults.map((artwork) => (
          <ArtworkCard artwork={artwork} />
        ))}
      </div>
    </>
  );
}
