// scenarios/acuteHeartFailure.js, was previously config
export const AcuteHeartFailureScenario = {
  name: "Acute Heart Failure",
  introduction: "Acute Heart Failure Overview",
  conclusion: "Treatment and Recovery Steps",
  showVAECMOBox: true,  // Add this line to show the VA ECMO box
  instructions: [
    {
      text: "Observe the initial patient parameters in the Data Layer.",
      position: { top: '10%', left: '5%', width: '20%', height: '80%' }
    },
    {
      text: "Note the reduced LV and RV contractility in the ECMO Layer.",
      position: { top: '40%', left: '30%', width: '40%', height: '30%' }
    },
    {
      text: "Check the increased heart rate in the Data Layer.",
      position: { top: '50%', left: '5%', width: '20%', height: '10%' }
    },
    {
      text: "Monitor the rising lactate levels in the ECMO Layer.",
      position: { top: '70%', left: '60%', width: '20%', height: '20%' }
    },
    {
      text: "Adjust ECMO settings as needed in the ECMO Layer.",
      position: { top: '20%', left: '30%', width: '40%', height: '60%' }
    }
  ],
  simulationLogic: (setValues) => {
    setValues(prev => ({
      ...prev,
      LV_Contractility: 0.3,
      RV_Contractility: 0.4,
      HR: 120,
      Lactate: prev.Lactate + 2,
    }));
  },
};