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
      <div className="nav-bar">
        <p className="fake-button" onClick={() => setPage("home")}>
          Back
        </p>
        <p className="fake-button">
          <a
            href="https://melissa-todo-projects.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            Link to app
          </a>
        </p>
        <p className="fake-button">
          <a
            href="https://github.com/rosemelissa/todo-projects-frontend"
            rel="noreferrer"
            target="_blank"
          >
            Frontend repository
          </a>
        </p>
        <p className="fake-button">
          <a
            href="https://github.com/rosemelissa/todo-projects-backend"
            rel="noreferrer"
            target="_blank"
          >
            Backend repository
          </a>
        </p>
      </div>
      <div className="project-main-content">
        <div className="text-image-couple">
          <p>Description</p>
          <img
            src="https://www.musicmundial.com/en/wp-content/uploads/2022/06/Jungkook-finally-fulfills-one-of-his-dreams-after-going-on-hiatus-with-BTS.jpg"
            alt="jungkook"
          />
        </div>
        <div className="text-image-couple">
          <p>Description2</p>
          <img
            src="https://www.musicmundial.com/en/wp-content/uploads/2022/06/Jungkook-finally-fulfills-one-of-his-dreams-after-going-on-hiatus-with-BTS.jpg"
            alt="jungkook"
          />
        </div>
      </div>
      <p>Other documentation links</p>
    </div>
  );
}

export default TodoApp;
