import React from 'react';
import ReactDOM from 'react-dom';
import TrackList from 'src/Components/TrackList/TrackList.js';

class Playlist extends React.Component {
    render() {
        return(
    
        <div>
            <div className = "Playlist" >
                <input value = "New Playlist" />
                <TrackList />
                <button className = "Playlist-save" > SAVE TO SPOTIFY </button>  
            </div>
        </div>
    )
}
};

export default Playlist;