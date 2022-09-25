interface IHome2DProps {
    setPage: React.Dispatch<React.SetStateAction<"todo-app" | "restaurant" | "playlist-converter" | "pokemon-top-trumps" | "home">>;
}

function Home2D({setPage}: IHome2DProps): JSX.Element {
    return (
        <div id='2d-home'>
            <h1>Hi, I'm Melissa</h1>
            <p>I'm a software engineer using the PERN stack</p>
            <h1>Projects</h1>
            <button type='button' onClick={() => {setPage('todo-app')}}>Todo app</button>
            <button type='button' onClick={() => {setPage('restaurant')}}>Restaurant</button>
            <button type='button' onClick={() => {setPage('playlist-converter')}}>Playlist converter</button>
            <button type='button' onClick={() => {setPage('pokemon-top-trumps')}}>Pokemon Top Trumps</button>
            <h1>Links</h1>
        </div>
    )
}

export default Home2D;