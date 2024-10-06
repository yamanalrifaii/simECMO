import React from 'react';
import AcuteHeartFailure from './AcuteHeartFailure';
import ChronicHeartFailure from './ChronicHeartFailure';

function ScenarioManager({ values, setValues }) {
  return (
    <div>
      <AcuteHeartFailure values={values} setValues={setValues} />
      <ChronicHeartFailure values={values} setValues={setValues} />
    </div>
  );
}

export default ScenarioManager;
