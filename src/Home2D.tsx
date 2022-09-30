import file from "./documents/Melissa Rose CV.pdf";

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
      <p>
        I'm a fullstack software engineer with an interest in WebDev, 3D
        graphics, and tech for good.
      </p>
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
        <p
          className="fake-button"
          onClick={() => window.open("https://github.com/rosemelissa")}
        >
          GitHub
        </p>
        <p
          className="fake-button"
          onClick={() =>
            window.open("https://www.linkedin.com/in/melissa-rose123/")
          }
        >
          LinkedIn
        </p>
        <p className="fake-button" onClick={() => window.open(file)}>
          CV
        </p>
        <p
          className="fake-button"
          onClick={() =>
            window.open(
              "https://openprocessing.org/user/334099?view=sketches&o=40"
            )
          }
        >
          Creative Coding
        </p>
      </div>
    </div>
  );
}

export default Home2D;
