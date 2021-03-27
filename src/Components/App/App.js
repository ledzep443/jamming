import './App.css';
import Playlist from '../Playlist/Playlist.js';
import Searchbar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import { render } from '@testing-library/react';

function App() {
    render() {
        return ( 
        <div>
        <h1 > Ja < span className = "highlight" > mmm </span>ing</h1>
        <div class = "App" >
        <Searchbar />
        <div className = "App-playlist" >
        <SearchResults />
        <Playlist />
        </div>   
        </div >  
    </div >
    );
}
}

export default App;