import React from 'react';

import TrackList from '../TrackList/TrackList.js';

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