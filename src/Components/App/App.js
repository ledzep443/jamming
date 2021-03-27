import './App.css';
import Playlist from '../Playlist/Playlist.js';
import Searchbar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import React from 'react';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [{
                id: 1,
                name: "Highway to Hell",
                artist: "ACDC",
                album: "Highway to Hell"
            },{
                id: 2,
                name: "name2",
                artist: "artist2",
                album: "album2"
            },{
                id: 3,
                name: "name3",
                artist: "artist3",
                album: "album3"
            }],
            playlistName: 'Playlist',
            playlistTracks: [{id: 4,
                name: "Highway to Hell",
                artist: "ACDC",
                album: "Highway to Hell"
            },{
                id: 5,
                name: "name2",
                artist: "artist2",
                album: "album2"
            },{
                id: 6,
                name: "name3",
                artist: "artist3",
                album: "album3"}],
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName(this);
}
    addTrack(track) {
        let tracks = this.state.playlistTracks;
        if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
    }
    removeTrack(track) {
        let tracks = this.state.playlistTracks.filter(currentTrack => currentTrack.id !== track.id);

        this.setState({ playlistTracks: tracks });
  }
  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }
  savePlaylist() {

  }

    render() {
        return ( 
        <div>
            <h1 > Ja < span className = "highlight" > mmm </span>ing</h1>
            <div class = "App" >
                <Searchbar />
                <div className = "App-playlist" >
                <SearchResults searchResults={this.state.searchResults} 
                               onAdd={this.addTrack}/>
                <Playlist playlistName={this.state.playlistName} 
                          playlistTracks={this.state.playlistTracks}
                          onRemove={this.removeTrack}
                          onNameChange={this.updatePlaylistName}
                          onSave={this.savePlaylist}/>
                </div>   
            </div >  
        </div >
        );
    }
};

export default App;