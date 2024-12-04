import React from 'react';
import '../css/Controller.css';
import '../css/App.css';
const ControlPanel = props => {
    return (
        <div id="control" className="control">
            <p>Name</p>
            <input type="text" id="nameInput" placeholder="Enter a name" style={{width: "100px"}}/>
            <p>Dimensions</p>
            <input type="number" id="widthInput" style={{width: "15px", height: "15px", textAlign: "center"}}/>
            <p style={{paddingLeft: 5, paddingRight: 5}}>×</p>
            <input type="number" id="heightInput" style={{width: "15px", height: "15px", textAlign: "center"}}/>
        </div>
    );
};

export default ControlPanel;