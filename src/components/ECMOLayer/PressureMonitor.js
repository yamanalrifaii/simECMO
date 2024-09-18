import React, { useState } from 'react';
import '../../css/PressureMonitor.css';

const PressureMonitor = () => {
  const [prePressure, setPrePressure] = useState(240);
  const [preUpper, setPreUpper] = useState(500);
  const [preLower, setPreLower] = useState(100);

  const [postPressure, setPostPressure] = useState(220);
  const [postUpper, setPostUpper] = useState(400);
  const [postLower, setPostLower] = useState(100);

  const [venoPressure, setVenoPressure] = useState(-10);
  const [venoUpper, setVenoUpper] = useState(20);
  const [venoLower, setVenoLower] = useState(-50);

  const increasePressure = (setPressure) => setPressure(prev => prev + 10);
  const decreasePressure = (setPressure) => setPressure(prev => prev - 10);

  return (
    <div className="pressure-monitor">
      <div className="pressure-display">
        <span className="label">Veno</span>
        <div className="led-indicator" />
        <div className="value">
          {venoPressure}<sup>{venoUpper}</sup><sub>{venoLower}</sub>
        </div>
        <div className="buttons">
          <div className="button-group">
            <button onClick={() => increasePressure(setVenoUpper)}>+</button>
            <button onClick={() => decreasePressure(setVenoUpper)}>-</button>
          </div>
          <div className="button-group">
            <button onClick={() => increasePressure(setVenoLower)}>+</button>
            <button onClick={() => decreasePressure(setVenoLower)}>-</button>
          </div>
        </div>
      </div>
      
      <div className="pressure-display">
        <span className="label">Pre</span>
        <div className="led-indicator" />
        <div className="value">
          {prePressure}<sup>{preUpper}</sup><sub>{preLower}</sub>
        </div>
        <div className="buttons">
          <div className="button-group">
            <button onClick={() => increasePressure(setPreUpper)}>+</button>
            <button onClick={() => decreasePressure(setPreUpper)}>-</button>
          </div>
          <div className="button-group">
            <button onClick={() => increasePressure(setPreLower)}>+</button>
            <button onClick={() => decreasePressure(setPreLower)}>-</button>
          </div>
        </div>
      </div>
      
      <div className="pressure-display">
        <span className="label">Post</span>
        <div className="led-indicator" />
        <div className="value">
          {postPressure}<sup>{postUpper}</sup><sub>{postLower}</sub>
        </div>
        <div className="buttons">
          <div className="button-group">
            <button onClick={() => increasePressure(setPostUpper)}>+</button>
            <button onClick={() => decreasePressure(setPostUpper)}>-</button>
          </div>
          <div className="button-group">
            <button onClick={() => increasePressure(setPostLower)}>+</button>
            <button onClick={() => decreasePressure(setPostLower)}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressureMonitor; 