import React from 'react';

import TrackList from '../TrackList/TrackList.js';

class Playlist extends React.Component {
    render() {
        return(
    
        <div>
            <div className = "Playlist" >
                <input defaultValue = {'New Playlist'} />
                <TrackList 
                    tracks={this.props.playlistTracks}
                    playlistName={this.props.playlistName}
                    playlistTracks={this.props.playlistTracks}
                    onAdd={this.props.onAdd}
                    onRemove={this.props.onRemove}
                    isRemoval={true}/>
                <button className = "Playlist-save" > SAVE TO SPOTIFY </button>  
            </div>
        </div>
    )
}
};

export default Playlist;