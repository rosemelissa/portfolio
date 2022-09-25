import { useState } from "react";
import P5Component from "./P5Component";
import { greet } from "./utils/greet";

function App(): JSX.Element {
  const [page, setPage] = useState<'3d-home'|'static-home'|'todo-app'|'restaurant'|'playlist-converter'|'pokemon-top-trumps'>('3d-home')
  return (
    <>
      <h1>{greet("World")}</h1>
      {page==='3d-home' && 
      <P5Component setPage={setPage}/>}
      {page==='todo-app' && <h2 onClick={() => setPage('3d-home')}>Todo app!</h2>}
    </>
  );
}

export default App;
