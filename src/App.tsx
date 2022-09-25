import { useState } from "react";
import TodoApp from "./components/TodoApp";
import P5Component from "./P5Component";
import { greet } from "./utils/greet";

function App(): JSX.Element {
  const [page, setPage] = useState<'home'|'todo-app'|'restaurant'|'playlist-converter'|'pokemon-top-trumps'>('home')
  const [mode, setMode] = useState<'2D'|'3D'>('3D');
  return (
    <>
      <h1>{greet("World")}</h1>
      {page==='home' &&
      <button type='button' onClick={() => {mode==='3D'? setMode('2D'): setMode('3D')}}>Toggle 2D/3D</button>
      }
      {page==='home' && mode==='3D' &&
      <P5Component setPage={setPage}/>}
      {page==='todo-app' && <TodoApp mode={mode} setPage={setPage}/>}
      {page==='home' && mode==='2D' && <h1>2d</h1>}
    </>
  );
}

export default App;
