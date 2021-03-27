import React from 'react';
import ReactDOM from 'react-dom';
import './Track.css';

class Track extends React.Component {
    render() {
        return(
            <div className="Track">
                <div className = "Track-information">
                    <h3>Track Name</h3>
                    <p>Track artist | Track album</p>
                </div>
                <button className = "Track-action"></button>
            </div>
        )
    }
}

export default Track;