import TodoNewProject from "../Images/TodoApp/TodoNewProject.png";
import TodoColourCoding from "../Images/TodoApp/TodoColourCoding.png";
import TodoEdit from "../Images/TodoApp/TodoEdit.png";
import TodoFilter from "../Images/TodoApp/TodoFilter.png";
import ExampleTodoList from "../Images/TodoApp/ExampleTodoList.png";
interface IRestaurantProps {
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

function Restaurant({ mode, setPage }: IRestaurantProps): JSX.Element {
  return (
    <div id="restaurant" className="project">
      <h1>Restaurant booking system</h1>
      <div className="nav-bar">
        <p className="fake-button" onClick={() => setPage("home")}>
          Back
        </p>
        <p
          className="fake-button"
          onClick={() =>
            window.open("https://rosemelissa-restaurant.netlify.app/")
          }
        >
          Link to app
        </p>
        <p
          className="fake-button"
          onClick={() =>
            window.open("https://github.com/rosemelissa/restaurant-frontend")
          }
        >
          Frontend repository
        </p>
        <p
          className="fake-button"
          onClick={() =>
            window.open("https://github.com/rosemelissa/restaurant-backend")
          }
        >
          Backend repository
        </p>
      </div>
      <div className="project-main-content">
        <h3 className="project-tagline">
          Fullstack todo app using PostgreSQL, Express, Node.js, React, HTML,
          and CSS
        </h3>

        <img
          id="example-todo-list"
          src={ExampleTodoList}
          alt="Todo app landing page"
        />

        <h3>Key features:</h3>
        <ul>
          <li>Make bookings for a certain date, time, and group size</li>
          <li>
            Table availability is automatically filtered to ensure there's a
            table before your booking is confirmed
          </li>
          <li>Admin can view a calendar of bookings for a certain date</li>
          <li>
            Admin can view the number of covers for a certain seven-day period
          </li>
          <li>Admin can view the current table capacities of the restaurant</li>
        </ul>

        <div className="project-image-grid">
          <img src={TodoNewProject} alt="Making a new project" />
          <img src={TodoEdit} alt="Editing a todo" />

          <img src={TodoFilter} alt="Filtering todos" />
          <img src={TodoColourCoding} alt="Todos are colour coded" />
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
