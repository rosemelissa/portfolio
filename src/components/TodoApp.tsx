interface ITodoAppProps {
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

function TodoApp({ mode, setPage }: ITodoAppProps): JSX.Element {
  return (
    <div id="todo-app" className="project">
      <h1>Todo list app</h1>
      <p className="fake-button back-button" onClick={() => setPage("home")}>
          Back
        </p>
      <div className="project-main-content">
        <h3 className="project-tagline">
          Fullstack todo app built using: PostgreSQL, Express, Node.js, React, HTML,
          and CSS
        </h3>
      <div className="nav-bar">
        
        <p
          className="fake-button"
          onClick={() =>
            window.open("https://melissa-todo-projects.netlify.app/")
          }
        >
          Link to app
        </p>
        <p
          className="fake-button"
          onClick={() =>
            window.open("https://github.com/rosemelissa/todo-projects-frontend")
          }
        >
          Frontend repository
        </p>
        <p
          className="fake-button"
          onClick={() =>
            window.open("https://github.com/rosemelissa/todo-projects-backend")
          }
        >
          Backend repository
        </p>
      </div>
      


<div className="loom-div"><iframe className="loom-iframe" title="todo-app-demo" src="https://www.loom.com/embed/eaf8caa2a29d4cdaac649a59c1cffb23" frameBorder="0" allowFullScreen ></iframe></div>
        <h3>Key features:</h3>
        <ul>
          <li>Make, edit, and delete projects</li>
          <li>Make, edit, and delete todos</li>
          <li>Filter todos</li>
          <li>View todo-status at a glance through colour coding</li>
        </ul>


        
      </div>
    </div>
  );
}

export default TodoApp;
