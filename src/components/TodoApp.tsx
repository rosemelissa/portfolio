import TodoNewProject from '../Images/TodoApp/TodoNewProject.png';
import TodoColourCoding from '../Images/TodoApp/TodoColourCoding.png';
import TodoEdit from '../Images/TodoApp/TodoEdit.png';
import TodoFilter from '../Images/TodoApp/TodoFilter.png';
import ExampleTodoList from '../Images/TodoApp/ExampleTodoList.png';


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
          <h3 className='project-tagline'>Fullstack todo app using PostgreSQL, Express, Node.js, React, HTML, and CSS</h3>
          
            <img id='example-todo-list'
            src={ExampleTodoList}
            alt="Todo app landing page"
            />
          
          <h3>Key features:</h3>
          <ul>
            <li>Make, edit, and delete projects</li>
            <li>Make, edit, and delete todos</li>
          <li>Filter todos</li>
          <li>View todo-status at a glance through colour coding</li>
          </ul>
          
        <div className="project-image-grid">
          <img
            src={TodoNewProject}
            alt="Making a new project"
            />
<img
            src={TodoEdit}
            alt="Editing a todo"
          />



          <img
            src={TodoFilter}
            alt="Filtering todos"
          />
          <img
            src={TodoColourCoding}
            alt="Todos are colour coded"
          />
 


            
          
        </div>
        </div>
    </div>
  );
}

export default TodoApp;
