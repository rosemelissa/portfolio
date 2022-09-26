interface IPlaylistConverterProps {
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

function PlaylistConverter({
  mode,
  setPage,
}: IPlaylistConverterProps): JSX.Element {
  return (
    <div id="playlist-converter" className="project">
      <h1>YouTube-to-Spotify Playlist Converter</h1>
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

export default PlaylistConverter;
