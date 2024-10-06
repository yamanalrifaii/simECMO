import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import Dashboard from './Dashboard';
import '../css/Scenarios.css';

const Scenario = ({ scenarios, values, setValues }) => {
    const { scenarioId } = useParams();
    const scenario = scenarios[scenarioId];
    const stepperRef = useRef(null);
    const [currentInstruction, setCurrentInstruction] = useState(0);
    const [showOverlay, setShowOverlay] = useState(false);
  
    useEffect(() => {
      if (scenario && scenario.simulationLogic) {
        scenario.simulationLogic(setValues);
      }
    }, [scenario, setValues]);
  
    const nextInstruction = () => {
      if (currentInstruction < scenario.instructions.length - 1) {
        setCurrentInstruction(currentInstruction + 1);
      } else {
        setShowOverlay(false);
      }
    };

  const renderOverlay = () => {
    if (!showOverlay) return null;
  
    const { text } = scenario.instructions[currentInstruction];
  
    return (
      <div className="fixed inset-0 z-50 pointer-events-none">
        <div
          className="fixed bg-white p-4 rounded-lg shadow-lg pointer-events-auto"
          style={{
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '80%',
            zIndex: 60,
          }}
        >
          <p className="text-lg font-semibold mb-4">{text}</p>
          <div className="flex justify-between">
            <Button 
              label="Close Guide" 
              icon="pi pi-times" 
              onClick={() => setShowOverlay(false)} 
              className="p-button-secondary"
            />
            <Button 
              label={currentInstruction === scenario.instructions.length - 1 ? "Finish" : "Next"} 
              icon="pi pi-chevron-right" 
              iconPos="right" 
              onClick={nextInstruction} 
            />
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="card flex flex-column h-full w-full relative">
      <Stepper ref={stepperRef} style={{ width: '100%' }} className="custom-stepper">
        <StepperPanel header="Introduction">
          <div className="flex flex-column h-12rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              {scenario.introduction}
            </div>
          </div>
          <div className="flex pt-4 justify-content-end">
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
          </div>
        </StepperPanel>
        
        <StepperPanel header={`${scenario.name} Scenario`}>
          <div className="flex h-[calc(100vh-200px)] relative">
            <div className="flex-grow pr-4" style={{ width: '100%', position: 'relative' }}>
              {renderOverlay()}
              <Button
                label="Instructions"
                icon="pi pi-question-circle"
                onClick={() => { setShowOverlay(true); setCurrentInstruction(0); }}
                className="p-button-help"
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  zIndex: 10
                }}
              />
                 {/* Add the VA ECMO box for this specific scenario */}
                 {scenario.showVAECMOBox && (
                <div 
                  className="absolute bg-blue-500 text-white px-2 py-1 rounded-md text-sm font-semibold"
                  style={{
                    top: '70px',  // Adjust as needed
                    left: '35%',  // Adjust as needed
                    zIndex: 20
                  }}
                >
                  VA ECMO
                </div>
              )}
              <Dashboard values={values} setValues={setValues} />
            </div>
          </div>
          <div className="flex pt-4 justify-content-between">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
          </div>
        </StepperPanel>

        <StepperPanel header="Conclusion">
          <div className="flex flex-column h-12rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
              {scenario.conclusion}
            </div>
          </div>
          <div className="flex pt-4 justify-content-start">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
          </div>
        </StepperPanel>
      </Stepper>
    </div>
  );
};

export default Scenario;

// import React, { useState, useEffect, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import { Stepper } from 'primereact/stepper';
// import { StepperPanel } from 'primereact/stepperpanel';
// import { Button } from 'primereact/button';
// import Dashboard from './Dashboard';
// import { useScenarioData } from '../Contexts/ScenarioDataContext';
// import '../css/Scenarios.css';

// const Scenario = ({ scenarios }) => {
//     const { scenarioId } = useParams();
//     const scenario = scenarios[scenarioId];
//     const stepperRef = useRef(null);
//     const [currentInstruction, setCurrentInstruction] = useState(0);
//     const [showOverlay, setShowOverlay] = useState(false);
//     const { sessionData, updateSessionData, resetSession, saveSession } = useScenarioData();
  
//     useEffect(() => {
//         if (scenario && scenario.simulationLogic && sessionData) {
//             const updatedData = scenario.simulationLogic(sessionData);
//             Object.entries(updatedData).forEach(([key, value]) => {
//                 updateSessionData(key, value);
//             });
//         }
//     }, [scenario, sessionData, updateSessionData]);
  
//     const nextInstruction = () => {
//         if (currentInstruction < scenario.instructions.length - 1) {
//             setCurrentInstruction(currentInstruction + 1);
//         } else {
//             setShowOverlay(false);
//         }
//     };
  
//     const renderOverlay = () => {
//         if (!showOverlay) return null;
    
//         const { text } = scenario.instructions[currentInstruction];
    
//         return (
//             <div className="fixed inset-0 z-50 pointer-events-none">
//                 <div
//                     className="fixed bg-white p-4 rounded-lg shadow-lg pointer-events-auto"
//                     style={{
//                         top: '20px',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         maxWidth: '80%',
//                         zIndex: 60,
//                     }}
//                 >
//                     <p className="text-lg font-semibold mb-4">{text}</p>
//                     <div className="flex justify-between">
//                         <Button 
//                             label="Close Guide" 
//                             icon="pi pi-times" 
//                             onClick={() => setShowOverlay(false)} 
//                             className="p-button-secondary"
//                         />
//                         <Button 
//                             label={currentInstruction === scenario.instructions.length - 1 ? "Finish" : "Next"} 
//                             icon="pi pi-chevron-right" 
//                             iconPos="right" 
//                             onClick={nextInstruction} 
//                         />
//                     </div>
//                 </div>
//             </div>
//         );
//     };
  
//     const renderSessionControls = () => (
//         <div className="flex justify-end space-x-2 mt-4">
//             <Button label="Reset Session" onClick={resetSession} className="p-button-secondary" />
//             <Button label="Save Session" onClick={saveSession} className="p-button-primary" />
//         </div>
//     );

//     if (!sessionData) {
//         return <div>Loading scenario data...</div>;
//     }

//     return (
//         <div className="card flex flex-column h-full w-full relative">
//             <Stepper ref={stepperRef} style={{ width: '100%' }} className="custom-stepper">
//                 <StepperPanel header="Introduction">
//                     <div className="flex flex-column h-12rem">
//                         <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
//                             {scenario.introduction}
//                         </div>
//                     </div>
//                     <div className="flex pt-4 justify-content-end">
//                         <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
//                     </div>
//                 </StepperPanel>
                
//                 <StepperPanel header={`${scenario.name} Scenario`}>
//                     <div className="flex h-[calc(100vh-200px)] relative">
//                         <div className="flex-grow pr-4" style={{ width: '100%', position: 'relative' }}>
//                             {renderOverlay()}
//                             <Button
//                                 label="Instructions"
//                                 icon="pi pi-question-circle"
//                                 onClick={() => { setShowOverlay(true); setCurrentInstruction(0); }}
//                                 className="p-button-help"
//                                 style={{
//                                     position: 'absolute',
//                                     top: '10px',
//                                     left: '10px',
//                                     zIndex: 10
//                                 }}
//                             />
//                             {scenario.showVAECMOBox && (
//                                 <div 
//                                     className="absolute bg-blue-500 text-dark-greyy px-2 py-1 rounded-md text-sm font-semibold"
//                                     style={{
//                                         top: '40px',
//                                         left: '25%',
//                                         zIndex: 20
//                                     }}
//                                 >
//                                     VA ECMO
//                                 </div>
//                             )}
//                             <Dashboard values={sessionData} setValues={updateSessionData} />
//                         </div>
//                     </div>
//                     <div className="flex pt-4 justify-content-between">
//                         <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
//                         <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
//                     </div>
//                     {renderSessionControls()}
//                 </StepperPanel>

//                 <StepperPanel header="Conclusion">
//                     <div className="flex flex-column h-12rem">
//                         <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
//                             {scenario.conclusion}
//                         </div>
//                     </div>
//                     <div className="flex pt-4 justify-content-start">
//                         <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
//                     </div>
//                 </StepperPanel>
//             </Stepper>
//         </div>
//     );
// };

// export default Scenario;