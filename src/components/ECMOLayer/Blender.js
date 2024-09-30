import React, { useState } from 'react';
import { Knob } from 'primereact/knob';
import { Slider } from 'primereact/slider';

function Blender() {
    const [fdo2, setFdo2] = useState(0.21);
    const [sliderValue, setSliderValue] = useState(2.5);

    const handleFdo2Change = (e) => {
        // Round to nearest 0.01
        setFdo2(Math.round(e.value * 100) / 100);
    };

    return (
        <div className="bg-transparent p-4 rounded-lg shadow-lg">
            <div className="bg-white text-dark-grey text-2xl font-mono p-2 mb-4 rounded text-center">
                {fdo2.toFixed(2)}
            </div>
            <Knob 
                value={fdo2} 
                onChange={handleFdo2Change}
                min={0.21}
                max={1}
                step={0.01}
                size={100}
                valueColor="#22C55E"
                rangeColor="#1E3A8A"
            />
            <div className="mt-4">
                <Slider 
                    value={sliderValue} 
                    onChange={(e) => setSliderValue(e.value)} 
                    min={0}
                    max={5}
                    step={0.5}
                />
                <div className=" mt-2">Sweep: {sliderValue.toFixed(1)}</div>
            </div>
        </div>
    );
}

export default Blender;