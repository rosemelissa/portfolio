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
      <h1>Restaurant booking site</h1>
      <p className="fake-button back-button" onClick={() => setPage("home")}>
          Back
        </p>
      <div className="project-main-content">
        <h3 className="project-tagline">
          Fullstack restaurant booking site built using: PostgreSQL, Express, Nodemailer, Node.js, React, HTML,
          and CSS
        </h3>
      <div className="nav-bar">
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
      


<div className="loom-div"><iframe className="loom-iframe" title="restaurant-demo" src="https://www.loom.com/embed/f1f57528dc4947f3a119381a221c9100" frameBorder="0" allowFullScreen ></iframe></div>
        
<h3>Key features:</h3>
        <ul>
          <li>Make bookings for a certain date, time, and group size</li>
          <li>Automatic booking confirmation email</li>
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

        
      </div>
    </div>
  );
}

export default Restaurant;