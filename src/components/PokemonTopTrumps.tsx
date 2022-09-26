interface IPokemonTopTrumpsProps {
  mode: "2D" | "3D";
  setPage: React.Dispatch<
    React.SetStateAction<
      | "home"
      | "todo-app"
      | "restaurant"
      | "playlist-converter"
      | "pokemon-top-trumps"
    >
  >;
}

function PokemonTopTrumps({ mode, setPage }: IPokemonTopTrumpsProps): JSX.Element {
  return (
    <div id="todo-app">
      <h1>Pokemon Top Trumps</h1>
      <button type="button" onClick={() => setPage("home")}>
        Back
      </button>
      <button type="button">Link to app</button>
      <button type="button">Frontend repository</button>
      <button type="button">Backend repository</button>
      <p>Description</p>
      <p>Images</p>
      <p>Other documentation links</p>
    </div>
  );
}

export default PokemonTopTrumps;
