import { useState } from "react";
import TodoApp from "./components/TodoApp";
import P5Component from "./P5Component";
import { greet } from "./utils/greet";

function App(): JSX.Element {
  const [page, setPage] = useState<'3d-home'|'2d-home'|'todo-app'|'restaurant'|'playlist-converter'|'pokemon-top-trumps'>('3d-home')
  const [mode, setMode] = useState<'2D'|'3D'>('3D');
  return (
    <>
      <h1>{greet("World")}</h1>
      {page==='3d-home' && 
      
      <P5Component setPage={setPage}/>}
      {page==='todo-app' && <TodoApp mode={mode} setPage={setPage}/>}
      
    </>
  );
}

export default App;
