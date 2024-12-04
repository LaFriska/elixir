import React from 'react';
import '../css/Controller.css';
const ControlPanel = props => {
    return (
        <div id="control" className="control">
            <p>Name</p>
            <input type="text" id="nameInput" defaultValue="Untitled"/>
        </div>
    );
};

export default ControlPanel;