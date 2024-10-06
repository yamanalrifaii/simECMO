// import React, { useState, useEffect } from 'react';
// import { scenarioConfigs } from './ScenariosConfig';
// import Dashboard from '../Dashboard';

// const ScenarioWrapper = ({ scenarioName }) => {
//   const scenario = scenarioConfigs[scenarioName];
//   const [values, setValues] = useState(scenario.initialValues);
//   const [currentInstruction, setCurrentInstruction] = useState(0);
//   const [showOverlay, setShowOverlay] = useState(true);

//   useEffect(() => {
//     if (scenarioName === 'acuteHeartFailure') {
//       setValues({
//         ...values,
//         LV_Contractility: 0.3,
//         RV_Contractility: 0.4,
//         HR: 120,
//         Lactate: values.Lactate + 2,
//       });
//     }
//   }, [scenarioName]);

//   const nextInstruction = () => {
//     if (currentInstruction < scenario.instructions.length - 1) {
//       setCurrentInstruction(currentInstruction + 1);
//     } else {
//       setShowOverlay(false);
//     }
//   };

//   const renderOverlay = () => {
//     if (!showOverlay) return null;
  
//     const { text } = scenario.instructions[currentInstruction];

//     return (
//       <div className="fixed inset-0 z-50 pointer-events-none">
//         <div
//           className="fixed bg-white p-4 rounded-lg shadow-lg pointer-events-auto"
//           style={{
//             top: '20px',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             maxWidth: '80%',
//             zIndex: 60,
//           }}
//         >
//           <p className="text-lg font-semibold mb-4">{text}</p>
//           <div className="flex justify-between">
//             <button onClick={() => setShowOverlay(false)}>Close Guide</button>
//             <button onClick={nextInstruction}>
//               {currentInstruction === scenario.instructions.length - 1 ? "Finish" : "Next"}
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="card flex flex-column h-full w-full relative">
//       {renderOverlay()}
//       <Dashboard values={values} setValues={setValues} />
//     </div>
//   );
// };

// export default ScenarioWrapper;
