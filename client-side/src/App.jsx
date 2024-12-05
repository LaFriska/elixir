import './css/App.css';
import ControlPanel from "./components/ControlPanel";
import Logo from "./components/Logo";
import {useEffect, useState} from "react";

function App() {

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

export default App;
