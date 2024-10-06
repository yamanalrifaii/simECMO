// import React, { useState, useEffect, useRef } from 'react';
// import { Stepper } from 'primereact/stepper';
// import { StepperPanel } from 'primereact/stepperpanel';
// import { Button } from 'primereact/button';
// import Dashboard from '../Dashboard';
// import '../../css/Scenarios.css';

// const AcuteHeartFailure = ({ values, setValues }) => {
//   const stepperRef = useRef(null);
//   const [currentInstruction, setCurrentInstruction] = useState(0);
//   const [showOverlay, setShowOverlay] = useState(false);

//   const instructions = [
//     {
//       text: "Observe the initial patient parameters in the Data Layer.",
//       position: { top: '10%', left: '5%', width: '20%', height: '80%' }
//     },
//     {
//       text: "Note the reduced LV and RV contractility in the ECMO Layer.",
//       position: { top: '40%', left: '30%', width: '40%', height: '30%' }
//     },
//     {
//       text: "Check the increased heart rate in the Data Layer.",
//       position: { top: '50%', left: '5%', width: '20%', height: '10%' }
//     },
//     {
//       text: "Monitor the rising lactate levels in the ECMO Layer.",
//       position: { top: '70%', left: '60%', width: '20%', height: '20%' }
//     },
//     {
//       text: "Adjust ECMO settings as needed in the ECMO Layer.",
//       position: { top: '20%', left: '30%', width: '40%', height: '60%' }
//     }
//   ];

//   useEffect(() => {
//     const simulateHeartFailure = () => {
//       setValues(prev => ({
//         ...prev,
//         LV_Contractility: 0.3,
//         RV_Contractility: 0.4,
//         HR: 120,
//         Lactate: prev.Lactate + 2,
//       }));
//     };

//     simulateHeartFailure();
//   }, [setValues]);

//   const nextInstruction = () => {
//     if (currentInstruction < instructions.length - 1) {
//       setCurrentInstruction(currentInstruction + 1);
//     } else {
//       setShowOverlay(false);
//     }
//   };

//   const renderOverlay = () => {
//     if (!showOverlay) return null;
  
//     const { text } = instructions[currentInstruction];
  
//     return (
//       <div className="fixed inset-0 z-50 pointer-events-none">
//         {/* Instruction Box Only */}
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
//             <Button 
//               label="Close Guide" 
//               icon="pi pi-times" 
//               onClick={() => setShowOverlay(false)} 
//               className="p-button-secondary"
//             />
//             <Button 
//               label={currentInstruction === instructions.length - 1 ? "Finish" : "Next"} 
//               icon="pi pi-chevron-right" 
//               iconPos="right" 
//               onClick={nextInstruction} 
//             />
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   return (
//     <div className="card flex flex-column h-full w-full relative">
//       <Stepper ref={stepperRef} style={{ width: '100%' }} className="custom-stepper">
//         {/* Step 1: Introduction */}
//         <StepperPanel header="Introduction">
//           <div className="flex flex-column h-12rem">
//             <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
//               Acute Heart Failure Overview
//             </div>
//           </div>
//           <div className="flex pt-4 justify-content-end">
//             <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
//           </div>
//         </StepperPanel>
        
//         {/* Step 2: Simulation */}
//         <StepperPanel header="Acute Heart Failure Scenario">
//           <div className="flex h-[calc(100vh-200px)] relative">
//             <div className="flex-grow pr-4" style={{ width: '100%', position: 'relative' }}>
//               {renderOverlay()}

//               {/* "Start Guide" button positioned at top-left of ECMO Layer */}
//               <Button
//                 label="Instructions"
//                 icon="pi pi-question-circle"
//                 onClick={() => { setShowOverlay(true); setCurrentInstruction(0); }}
//                 className="p-button-help"
//                 style={{
//                   position: 'absolute',
//                   top: '10px',
//                   left: '10px',
//                   zIndex: 10
//                 }}
//               />

//               <Dashboard values={values} setValues={setValues} />
//             </div>
//           </div>
//           <div className="flex pt-4 justify-content-between">
//             <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
//             <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
//           </div>
//         </StepperPanel>

//         {/* Step 3: Conclusion */}
//         <StepperPanel header="Conclusion">
//           <div className="flex flex-column h-12rem">
//             <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
//               Treatment and Recovery Steps
//             </div>
//           </div>
//           <div className="flex pt-4 justify-content-start">
//             <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
//           </div>
//         </StepperPanel>
//       </Stepper>
//     </div>
//   );
// };

// export default AcuteHeartFailure;
