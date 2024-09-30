import React from 'react';
import VA_ECMO from '../../images/VA_ECMO.svg'
import PumpSettings from './PumpSettings'
import Blender1 from './Blender1';
import OxygenatorSettings from './OxygenatorSettings';

function ECMOLayer() {
  const parameters = {
    AoP: 90,
    PAP: 15,
    PCWP: 10,
    CVP: 5,
    CO: 5,
    pH: 7.35,
    pCO2: 40,
    pO2: 90,
    HCO3: 24,
    BE: -1,
    O2Sat: "96%",
    Lactate: 1,
    Hb: 13,
    DO2: 1110,
    P1: -60,
    P2: 350,
    P3: 400,
    Delta_P: 10,
  };

 
  return (
    <div className="flex justify-between items-start">
      <div className="flex-grow flex justify-center relative">
        <div className="relative">
          <img 
            src={VA_ECMO} 
            width="700" 
            height="300" 
            alt="ECMO diagram" 
            className="mx-4 relative"
            style={{ top: '160px', left: '95px' }} 
          />
          {/* Position OxygenatorSettings on the line exiting the pump */}
          <div className="absolute" style={{ top: '45%', left: '25%', transform: 'translate(-50%, -50%)' }}>
            <OxygenatorSettings />
          </div>
          {/* Position Blender1 within the ECMO circuit */}
          <div className="absolute" style={{ top: '95%', right: '100%', transform: 'translate(-50%, -50%)' }}>
            <Blender1 />
          </div>
          <div className="absolute" style={{ top: '35%', left: '73%', transform: 'translate(-50%, -50%)' }}>
            <PumpSettings />
          </div>

        </div>
      </div>
      <div className="flex-shrink-0">
        <div className="p-2 bg-white rounded-lg shadow">
          <table className="w-full text-xs">
            <thead>
              <tr>
                <th className="px-2 py-1 text-left font-medium text-gray-500 uppercase tracking-wider">
                  Output
                </th>
                <th className="px-2 py-1 text-right font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {Object.entries(parameters).map(([key, value]) => (
                <tr key={key}>
                  <td className="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-900">{key}</td>
                  <td className="px-2 py-1 whitespace-nowrap text-sm text-right text-gray-500">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ECMOLayer;
