import React, { useState } from 'react';
import { Slider } from 'primereact/slider';

function OxygenatorSettings() {
    const [diffusion, setDiffusion] = useState(0.00505);
    const [oxygenatorResistance, setOxygenatorResistance] = useState(100);

    const handleDiffusionChange = (newValue) => {
        setDiffusion(Math.min(0.01000, Math.max(0.00010, parseFloat(newValue.toFixed(5)))));
    };

    const handleResistanceChange = (newValue) => {
        setOxygenatorResistance(Math.min(200, Math.max(0, parseFloat(newValue.toFixed(1)))));
    };

    const incrementDiffusion = () => handleDiffusionChange(diffusion + 0.00001);
    const decrementDiffusion = () => handleDiffusionChange(diffusion - 0.00001);
    const incrementResistance = () => handleResistanceChange(oxygenatorResistance + 0.5);
    const decrementResistance = () => handleResistanceChange(oxygenatorResistance - 0.5);

    return (
        <div className="bg-white p-2 rounded-lg shadow-md w-48">
            <h3 className="text-dark-grey text-sm font-bold mb-2 text-center">Oxygenator Settings</h3>
            <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-dark-grey text-xs">Diffusion:</span>
                    <span className="text-dark-grey text-xs">{diffusion.toFixed(5)}</span>
                </div>
                <div className="flex items-center">
                    <button onClick={decrementDiffusion} className="text-dark-grey text-xs px-2 py-1 bg-white rounded">-</button>
                    <Slider 
                        value={diffusion} 
                        onChange={(e) => handleDiffusionChange(e.value)} 
                        min={0.00010}
                        max={0.01000}
                        step={0.00001}
                        className="w-full mx-2"
                    />
                    <button onClick={incrementDiffusion} className="text-dark-grey text-xs px-2 py-1 bg-white rounded">+</button>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center mb-1">
                    <span className="text-dark-grey text-xs">Oxygenator Resistance:</span>
                    <span className="text-dark-grey text-xs">{oxygenatorResistance.toFixed(1)}</span>
                </div>
                <div className="flex items-center">
                    <button onClick={decrementResistance} className="text-dark-grey text-xs px-2 py-1 bg-white rounded">-</button>
                    <Slider 
                        value={oxygenatorResistance} 
                        onChange={(e) => handleResistanceChange(e.value)} 
                        min={0}
                        max={200}
                        step={0.5}
                        className="w-full mx-2"
                    />
                    <button onClick={incrementResistance} className="text-dark-grey text-xs px-2 py-1 bg-white rounded">+</button>
                </div>
            </div>
        </div>
    );
}

export default OxygenatorSettings;