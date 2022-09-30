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

function PokemonTopTrumps({
  mode,
  setPage,
}: IPokemonTopTrumpsProps): JSX.Element {
  return (
    <div id="pokemon-top-trumps" className="project">
      <h1>Pokemon Top Trumps</h1>
      <p className="fake-button back-button" onClick={() => setPage("home")}>
        Back
      </p>
      <div className="project-main-content">
        <h3 className="project-tagline">
          Top Trumps game built using: React, Node.js, TypeScript, HTML, CSS,
          Pokemon API
        </h3>
        <div className="nav-bar">
          <p
            className="fake-button"
            onClick={() =>
              window.open("https://melissa-pokemon-top-trumps.netlify.app/")
            }
          >
            Link to app
          </p>
          <p
            className="fake-button"
            onClick={() =>
              window.open("https://github.com/rosemelissa/pokemon-top-trumps")
            }
          >
            Frontend repository
          </p>
        </div>

        <div className="loom-div">
          <iframe
            className="loom-iframe"
            title="pokemon-top-trumps-demo"
            src="https://www.loom.com/embed/f32a27f810af47ea8c1b15d8710e95ed"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <h3>Key features:</h3>
        <ul>
          <li>Gets Pokemon data from Pokemon API</li>
          <li>Play top trumps against a computer</li>
        </ul>
      </div>
    </div>
  );
}

export default PokemonTopTrumps;
