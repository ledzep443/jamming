import React from 'react';
import './Playlist.css'
import TrackList from '../TrackList/TrackList.js';


class Playlist extends React.Component {
    constructor(props) {
        super(props)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.state = {playlistName: ""}
    }
    handleNameChange(event) {
        this.props.onNameChange(event.target.value)
    }
    
    render() {
        return(
    
        <div>
            <div className = "Playlist" >
                <input defaultValue = {'New Playlist'} onChange={this.handleNameChange}/>
                <TrackList 
                    
                    playlistName={this.props.playlistName}
                    tracks={this.props.playlistTracks}
                    onAdd={this.props.onAdd}
                    onRemove={this.props.onRemove}
                    isRemoval={true}/>
                <button className = "Playlist-save" onClick={this.props.onSave}> SAVE TO SPOTIFY </button>  
            </div>
        </div>
    )
}
};

export default Playlist;