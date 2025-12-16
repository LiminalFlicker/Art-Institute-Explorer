import { createContext, useState } from "react";
import type { ResultsArts, ResultsArtsArray } from "../types/schemas";

type ArtContext = {
  artSearchResults: ResultsArtsArray;
  updateResults: (results: ResultsArts[]) => void;
};

export const ArtContext = createContext<ArtContext>();

export default function ArtSearchContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [artSearchResults, setArtSearchResults] = useState<ResultsArtsArray>();

  function updateResults(results: ResultsArts[]) {
    setArtSearchResults(results);
  }

  return (
    <ArtContext value={{ artSearchResults, updateResults }}>
      {children}
    </ArtContext>
  );
}
