import { useState } from "react";

interface IPlaylistConverterProps {
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

function PlaylistConverter({ mode, setPage }: IPlaylistConverterProps): JSX.Element {
  const [collapsibleOpen, setCollapsibleOpen] = useState<boolean>(false);
  return (
    <div id="playlist-converter" className="project">
      <h1>YouTube-to-Spotify Playlist Converter</h1>
      <p className="fake-button back-button" onClick={() => setPage("home")}>
          Back
        </p>
      <div className="project-main-content">
        <h3 className="project-tagline">
          Playlist converter built using: OAuth2.0, React, Node.js, HTML, CSS
        </h3>
      <div className="nav-bar">
        
        <p
          className="fake-button"
          onClick={() =>
            window.open("https://rosemelissa-playlist-converter.netlify.app/")
          }
        >
          Link to app
        </p>
        <p
          className="fake-button"
          onClick={() =>
            window.open("https://github.com/rosemelissa/playlist-converter-frontend")
          }
        >
          Repository
        </p>
        
      </div>
<div className="content">
  <p>This app is currently in Spotify's development mode, which means that only users manually whitelisted by me can use it. Until the app gains approval from Spotify to be shipped to general audiences, feel free to message me if you would like me to whitelist your Spotify account. Alterntaively, feel free to use the log-in details below: </p>
  
</div>
      <p className="fake-button" onClick={() => setCollapsibleOpen((collapsibleOpen) => !collapsibleOpen)}>Click for login details</p>
{collapsibleOpen && <><p>Username: rosemelissa.playlist.converter@gmail.com</p>
  <p>Password: P4ssw0rd</p></>}


<div className="loom-div"><iframe className="loom-iframe" title="playlist-converter-demo" src="https://www.loom.com/embed/35c5c623dd714c4eb2704a3524571e9f" frameBorder="0" allowFullScreen ></iframe></div>
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

export default PlaylistConverter;