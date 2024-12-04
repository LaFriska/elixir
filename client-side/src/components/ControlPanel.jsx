import React from 'react';
import '../App.css';
const ControlPanel = props => {
    return (
        <div id="control" className="control">
            <p>File Name: </p>
            <input type="text" id="nameInput" defaultValue="Untitled"/>
        </div>
    );
};

export default ControlPanel;