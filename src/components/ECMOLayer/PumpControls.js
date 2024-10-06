import React, { useState } from 'react';
import { Knob } from 'primereact/knob';
import 'primereact/resources/themes/saga-blue/theme.css';  // Import theme
import 'primereact/resources/primereact.min.css';           // Import PrimeReact CSS
import 'primeicons/primeicons.css';                         // Import PrimeIcons
import '../../css/PumpControls.css';                                // Import your custom CSS

function PumpControls() {
const [value, setValue] = useState(45);

    return (
        <div className="pump-controls">
            <h3>Pump Controls</h3>
            <div className="knob-container">
                <div className="knob-value">{value}</div>
                <Knob 
                    value={value} 
                    onChange={(e) => setValue(e.value)} 
                    size={120} 
                    valueColor="#97F8CD" 
                    rangeColor="#e0e0e0" 
                    textColor="#000000" 
                    strokeWidth={10}
                />
            </div>
        </div>
        // <div>
        // <h2>Pump Controls</h2>
        // <Knob value={value} onChange={(e) => setValue(e.value)} />
    //   </div>
    );
}

export default PumpControls;
