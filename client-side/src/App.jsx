import './css/App.css';
import ControlPanel from "./components/ControlPanel";
import Logo from "./components/Logo";
import {useEffect, useState} from "react";

function App() {

    //Picture grid
    let picture = initialisePicture()

    //Height and width of the canvas
    const [width, setWidth] = useState(8)
    const [height, setHeight] = useState(8)
    const [name, setName] = useState("untitled")

    return (
        <div>
            <Logo/>
            <ControlPanel setHeight={setHeight}
                          setWidth={setWidth}
                          setName={setName}
            />
        </div>
    );
}

function initialisePicture(w, h, defaultValue){
    let res = []
    for(let i = 0; i < h; i++){
        let temp = []
        for(let i = 0; i < w; i++){
            temp.push(defaultValue)
        }
        res.push(temp)
    }
    return res;
}

export default App;
