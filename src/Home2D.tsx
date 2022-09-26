interface IHome2DProps {
  setPage: React.Dispatch<
    React.SetStateAction<
      | "todo-app"
      | "restaurant"
      | "playlist-converter"
      | "pokemon-top-trumps"
      | "home"
    >
  >;
}

function Home2D({ setPage }: IHome2DProps): JSX.Element {
  return (
    <div id="home-2d">
      <h1>Hi, I'm Melissa</h1>
      <p>I'm a software engineer using the PERN stack</p>
      <h2>Projects</h2>
      <div className="home-2d-projects">
        <p
          className="fake-button"
          onClick={() => {
            setPage("todo-app");
          }}
        >
          Todo app
        </p>
        <p
          className="fake-button"
          onClick={() => {
            setPage("restaurant");
          }}
        >
          Restaurant
        </p>
        <p
          className="fake-button"
          onClick={() => {
            setPage("playlist-converter");
          }}
        >
          Playlist converter
        </p>
        <p
          className="fake-button"
          onClick={() => {
            setPage("pokemon-top-trumps");
          }}
        >
          Pokemon Top Trumps
        </p>
      </div>
      <h2>Links</h2>
      <div className="home-2d-links">
        <p className="fake-button">
          <a
            href="https://github.com/rosemelissa"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </p>
        <p className="fake-button">
          <a
            href="https://www.linkedin.com/in/melissa-rose123/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </p>
        <p className="fake-button">
          <a
            href="https://melissa-todo-projects.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            CV
          </a>
        </p>
        <p className="fake-button">
          <a
            href="https://openprocessing.org/user/334099?view=sketches&o=40"
            rel="noreferrer"
            target="_blank"
          >
            Creative Coding
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home2D;
