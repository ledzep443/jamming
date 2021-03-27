import './App.css';
import Playlist from 'src/Components/Playlist/Playlist.js';
import Searchbar from 'src/Components/SearchBar/SearchBar.js';
import SearchResults from 'src/Components/SearchResults/SearchResults.js';

function App() {
    return ( <
        div >
        <
        h1 > Ja < span className = "highlight" > mmm < /span>ing</h
        1 >
        <
        div class = "App" >
        <
        Searchbar / >
        <
        div className = "App-playlist" >
        <
        SearchResults / >
        <
        Playlist / >
        <
        /div> < /
        div > < /
        div >
    );
}

export default App;