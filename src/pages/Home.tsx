import "../App.css";
import { useContext } from "react";
import { ArtContext } from "../contexts/ArtContext";
import ArtworkCard from "../components/ArtworkCard";

export default function Home() {
  const { artSearchResults } = useContext(ArtContext);

  console.log("sad", artSearchResults);

  return (
    <>
      {artSearchResults.length === 0 ? (
        <h1>No art here </h1>
      ) : (
        <ArtworkCard artwork={artSearchResults[4]} />
      )}
    </>
  );
}
