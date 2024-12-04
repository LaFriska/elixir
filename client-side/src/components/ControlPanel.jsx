import React from 'react';
import '../css/Controller.css';
import '../css/App.css';
const ControlPanel = props => {
    return (
        <div id="control" className="control">
            <div id="control-left" className="control-left">
                <p>Name</p>
                <input type="text" id="nameInput" placeholder="Enter a name" style={{width: "100px"}}/>
                <p>Dimensions</p>
                <input type="number"
                       id="widthInput"
                       defaultValue="8"
                       style={{width: "15px", height: "15px", textAlign: "center"}}/>
                <p style={{paddingLeft: 5, paddingRight: 5}}>×</p>
                <input type="number"
                       id="heightInput"
                       defaultValue="8"
                       style={{width: "15px", height: "15px", textAlign: "center"}}/>
            </div>
            <div id="control-right" className="control-right">
                {/*<img src="./img/bucket.png"/>*/}
                <button>Export to PNG</button>
                <button>Export to JSON</button>
            </div>
        </div>
    );
};

export default ControlPanel;