import React from 'react';
import VA_ECMO from '../../images/VA_ECMO.svg';
import PumpSettings from './PumpSettings';
import Blender1 from './Blender1';
import OxygenatorSettings from './OxygenatorSettings';
import OutputParameters from './OutputParameters';

function ECMOLayer({ values, setValues }) {
  const { LV_Contractility, RV_Contractility, HR, Lactate, O2Sat, FdO2, Sweep } = values;

  // Calculate dynamic cardiac output based on contractility and HR
  const CO = (LV_Contractility + RV_Contractility) * HR / 100;
  const updatedO2Sat = Math.max(0, O2Sat - (2 * Lactate));

  // Update values dynamically when user changes settings
  const updateValues = (newValues) => {
    setValues(prev => ({ ...prev, ...newValues }));
  };

  const hemodynamics = {
    AoP: '90',
    PAP: '15',
    PCWP: '10',
    CVP: '5',
    CO_LV: CO.toFixed(2),
    CO_RV: '1.67',
  };

  const bloodGases = {
    pH: { arterial: '7.35', venous: '7.40' },
    pCO2: { arterial: '40', venous: '5' },
    pO2: { arterial: '349', venous: '44' },
    HCO3: { arterial: '24', venous: '23' },
    BE: { arterial: '0.1', venous: '0.2' },
    O2Sat: { arterial: updatedO2Sat.toFixed(1), venous: '80' },
    Lactate: Lactate.toFixed(1),
    Hb: '13',
    DO2: '917',
  };

  const pressures = {
    P1: '-22',
    P2: '177',
    P3: '170',
    Delta_P: '7',
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
            style={{ top: '160px', left: '45px' }} 
          />
          {/* Link OxygenatorSettings to update values */}
          <div className="absolute" style={{ top: '45%', left: '20%', transform: 'translate(-50%, -50%)' }}>
            <OxygenatorSettings values={values} setValues={setValues} />
          </div>
          {/* Link Blender1 to update values */}
          <div className="absolute" style={{ top: '95%', right: '105%', transform: 'translate(-50%, -50%)' }}>
            <Blender1 values={values} setValues={setValues} />
          </div>
          <div className="absolute" style={{ top: '35%', left: '66%', transform: 'translate(-50%, -50%)' }}>
            <PumpSettings values={values} setValues={setValues} />
          </div>
        </div>
      </div>
      
      {/* Pass updated values to OutputParameters */}
      <div className="flex-shrink-0">
        <OutputParameters 
          hemodynamics={hemodynamics} 
          bloodGases={bloodGases} 
          pressures={pressures} 
        />
      </div>
    </div>
  );
}

export default ECMOLayer;



// import React from 'react';
// import VA_ECMO from '../../images/VA_ECMO.svg';
// import PumpSettings from './PumpSettings';
// import Blender1 from './Blender1';
// import OxygenatorSettings from './OxygenatorSettings';
// import OutputParameters from './OutputParameters';
// import { useScenarioData } from '../../Contexts/ScenarioDataContext';

// function ECMOLayer({ isSimulation }) {
//     const scenarioData = useScenarioData();
//     const sessionData = scenarioData?.sessionData;

//     // Fallback for undefined sessionData
//     if (isSimulation && !sessionData) {
//         return <div>Loading ECMO data...</div>;
//     }

//     // Use sessionData if it's a simulation, otherwise provide local default values
//     const { LV_Contractility = 0.6, RV_Contractility = 0.8, HR = 80, Lactate = 2.0, O2Sat = 99 } = isSimulation && sessionData ? sessionData : {};

//     const CO = (LV_Contractility + RV_Contractility) * HR / 100;
//     const updatedO2Sat = Math.max(0, O2Sat - (2 * Lactate));

//     const hemodynamics = {
//         AoP: '90',
//         PAP: '15',
//         PCWP: '10',
//         CVP: '5',
//         CO_LV: CO?.toFixed(2),
//         CO_RV: '1.67',
//     };

//     const bloodGases = {
//         pH: { arterial: '7.35', venous: '7.40' },
//         pCO2: { arterial: '40', venous: '5' },
//         pO2: { arterial: '349', venous: '44' },
//         HCO3: { arterial: '24', venous: '23' },
//         BE: { arterial: '0.1', venous: '0.2' },
//         O2Sat: { arterial: updatedO2Sat?.toFixed(1), venous: '80' },
//         Lactate: Lactate?.toFixed(1),
//         Hb: '13',
//         DO2: '917',
//     };

//     const pressures = {
//         P1: '-22',
//         P2: '177',
//         P3: '170',
//         Delta_P: '7',
//     };

//     return (
//         <div className="flex justify-between items-start">
//             <div className="flex-grow flex justify-center relative">
//                 <div className="relative">
//                     <img 
//                         src={VA_ECMO} 
//                         width="700" 
//                         height="300" 
//                         alt="ECMO diagram" 
//                         className="mx-4 relative"
//                         style={{ top: '160px', left: '45px' }} 
//                     />
//                     <div className="absolute" style={{ top: '45%', left: '20%', transform: 'translate(-50%, -50%)' }}>
//                         <OxygenatorSettings />
//                     </div>
//                     <div className="absolute" style={{ top: '95%', right: '105%', transform: 'translate(-50%, -50%)' }}>
//                         <Blender1 />
//                     </div>
//                     <div className="absolute" style={{ top: '35%', left: '66%', transform: 'translate(-50%, -50%)' }}>
//                         <PumpSettings />
//                     </div>
//                 </div>
//             </div>
//             <div className="flex-shrink-0">
//                 <OutputParameters 
//                     hemodynamics={hemodynamics} 
//                     bloodGases={bloodGases} 
//                     pressures={pressures} 
//                 />
//             </div>
//         </div>
//     );
// }

// export default ECMOLayer;
