import { useState } from "react";
import PlaylistConverter from "./components/PlaylistConverter";
import PokemonTopTrumps from "./components/PokemonTopTrumps";
import Restaurant from "./components/Restaurant";
import TodoApp from "./components/TodoApp";
import Home2D from "./Home2D";
import P5Component from "./P5Component";
import "./app.css";
import Instructions3D from "./components/Instructions3D";

function App(): JSX.Element {
  const [page, setPage] = useState<
    | "home"
    | "todo-app"
    | "restaurant"
    | "playlist-converter"
    | "pokemon-top-trumps"
  >("home");
  const [mode, setMode] = useState<"2D" | "3D">("3D");
  const [instructionsShow, setInstructionsShow] = useState<boolean>(true);
  return (
    <>
      {page === "home" && (
        <p
          className="fake-button"
          id="toggle-2d-3d"
          onClick={() => {
            mode === "3D" ? setMode("2D") : setMode("3D");
          }}
        >
          Toggle 2D/3D
        </p>
      )}
      {page === "home" && mode === "3D" && <P5Component setPage={setPage} />}
      {page === "home" && mode === "3D" && instructionsShow && (
        <Instructions3D setInstructionsShow={setInstructionsShow} />
      )}
      {page === "todo-app" && <TodoApp mode={mode} setPage={setPage} />}
      {page === "restaurant" && <Restaurant mode={mode} setPage={setPage} />}
      {page === "playlist-converter" && (
        <PlaylistConverter mode={mode} setPage={setPage} />
      )}
      {page === "pokemon-top-trumps" && (
        <PokemonTopTrumps mode={mode} setPage={setPage} />
      )}
      {page === "home" && mode === "2D" && <Home2D setPage={setPage} />}
    </>
  );
}

export default App;
