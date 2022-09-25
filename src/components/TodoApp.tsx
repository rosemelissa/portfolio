interface ITodoAppProps {
    mode: '2D'|'3D';
    setPage: React.Dispatch<React.SetStateAction<"3d-home" | "2d-home" | "todo-app" | "restaurant" | "playlist-converter" | "pokemon-top-trumps">>;
}

function TodoApp({mode, setPage}: ITodoAppProps): JSX.Element {
    return (
        <div id='todo-app'>
            <h1>Todo list app</h1>
            <button type='button' onClick={() => {mode==='3D' ? setPage('3d-home') : setPage('2d-home')}}>Back</button>
            <button type='button'>Link to app</button>
            <button type='button'>Frontend repository</button>
            <button type='button'>Backend repository</button>
            <p>Description</p>
            <p>Images</p>
            <p>Other documentation links</p>
        </div>
    )
}

export default TodoApp;