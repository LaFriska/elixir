import React from 'react';
import '../css/Controller.css';
import '../css/App.css';

/**
 * Represents a single input field for a dimension variable (either width or height).
 * @param props contains a single setter that either sets the width constant or height constant.
 * immediately when the input number is changed.
 */
const DimensionInput = props => {
    return (
        <input type="number"
               id="widthInput"
               defaultValue="8"
               style={{width: "30px", height: "15px", textAlign: "center"}}
               onChange={(e) => {
                   const val = Number.parseInt(e.target.value);
                   if(!isNaN(val)) props.set(val)
               }}
        />
    )
}

/**
 * Represents the control panel toward the top of the webpage. Contains fields providing ways to
 * set names, dimensions etc for the image.
 * @param props contains setter methods as a way to retrieve information to the parent.
 */
const ControlPanel = props => {

    return (
        <div id="control" className="control">
            <div id="control-left" className="control-left">
                <p>Name</p>
                <input type="text" id="nameInput" placeholder="Enter a name" style={{width: "100px"}}/>
                <p>Dimensions</p>
                <DimensionInput set={props.setWidth}></DimensionInput>
                <p style={{paddingLeft: 5, paddingRight: 5}}>×</p>
                <DimensionInput set={props.setHeight}></DimensionInput>
            </div>
            <div id="control-right" className="control-right">
                <button>Export to PNG</button>
                <button>Export to JSON</button>
            </div>
        </div>
    );
};

export default ControlPanel;