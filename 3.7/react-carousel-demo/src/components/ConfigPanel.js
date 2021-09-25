import React, { useState } from "react";
import "../style/ConfigPanel.css";

const ConfigPanel = ({ speed, setSpeed, stopAutoPlay, setManual }) =>{
    const [value, setValue] = useState(2000);

    const resetSpeed = (e, value) =>{
        e.preventDefault();
        setManual(false);
        setSpeed(value);
    }
    return (
        <div className="config">
            <div className="config-speed">
                <p>Current autoplay speed: {speed / 1000}s</p>
                <span>Change autoplay speed: </span>
                <input type="number" value={value} onChange={(e) => setValue(e.target.value)}></input>
                <button className="speed-button" onClick={(e) => resetSpeed(e, value)}>Change</button>
                <span> or </span>
                <button className="speed-button" onClick={(e) => resetSpeed(e, 1000)}>1s</button>
                <button className="speed-button" onClick={(e) => resetSpeed(e, 3000)}>3s</button>
                <button className="speed-button" onClick={(e) => resetSpeed(e, 5000)}>5s</button>
                <button className="speed-button" onClick={(e) => stopAutoPlay()}>Stop autoplay</button>
            </div>
        </div>
    );
}

export default ConfigPanel;