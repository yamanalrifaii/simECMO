import React, { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../../css/DataLayer.css';

function DataLayer() {
    const [values, setValues] = useState({
        sweep: 5,
        FDO2: 0.21,
        shunt_fraction: 20,
        DLCO: 20,
        FIO2: 0.21,
        Resp_Rate: 12,
        TV: 500,
        MVO2: 250,
        Hb: 12,
        Lactate: 1,
        HCO3: 24,
        LV_Contractility: 1,
        RV_Contractility: 1,
        SVR: 20,
        PVR: 1,
        Volume: 5000,
        HR: 70
    });

    const parameterConfig = {
        sweep: { min: 0, max: 10, step: 0.5 },
        FDO2: { min: 0.05, max: 1.00, step: 0.05 },
        shunt_fraction: { min: 0, max: 100, step: 1 },
        DLCO: { min: 1, max: 100, step: 1 },
        FIO2: { min: 0.05, max: 1, step: 0.01 },
        Resp_Rate: { min: 0, max: 30, step: 1 },
        TV: { min: 0, max: 1000, step: 10 },
        MVO2: { min: 100, max: 1500, step: 5 },
        Hb: { min: 5, max: 20, step: 0.5 },
        Lactate: { min: 0, max: 15, step: 0.5 },
        HCO3: { min: 10, max: 40, step: 0.5 },
        LV_Contractility: { min: 0.20, max: 10.00, step: 0.1 },
        RV_Contractility: { min: 0.04, max: 5.00, step: 0.1 },
        SVR: { min: 0, max: 100, step: 0.10 },
        PVR: { min: 0, max: 80, step: 0.10 },
        Volume: { min: 200, max: 5000, step: 20 },
        HR: { min: 40, max: 210, step: 1 }
    };

    const handleChange = (key, newValue) => {
        setValues(prev => ({ ...prev, [key]: newValue }));
    };

    const renderParameter = (key, value) => (
        <div key={key} className="flex justify-between items-center p-2 border-b border-gray-200">
            <span className="text-sm font-medium text-gray-700 mr-2">
                {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </span>
            <InputNumber
                value={value}
                onValueChange={(e) => handleChange(key, e.value)}
                mode="decimal"
                showButtons
                buttonLayout="horizontal"
                decrementButtonClassName="p-button-danger"
                incrementButtonClassName="p-button-danger"
                incrementButtonContent="+"
                decrementButtonContent="-"
                min={parameterConfig[key].min}
                max={parameterConfig[key].max}
                step={parameterConfig[key].step}
                className="custom-inputnumber"
            />
        </div>
    );

    const renderParameterGroup = (title, parameters) => (
        <div className="mb-4 bg-gray-700 rounded overflow-hidden">
            <h3 className="text-white text-sm font-semibold p-2">{title}</h3>
            <div className="bg-white max-h-60 overflow-y-auto">
                {parameters.map(param => renderParameter(param, values[param]))}
            </div>
        </div>
    );

    const lungsParameters = ['sweep', 'FDO2', 'shunt_fraction', 'DLCO', 'FIO2', 'Resp_Rate', 'TV'];
    const patientParameters = ['MVO2', 'Hb', 'Lactate', 'HCO3', 'LV_Contractility', 'RV_Contractility', 'SVR', 'PVR', 'Volume', 'HR'];

    return (
        <div className="flex flex-col space-y-4 p-4 rounded-lg overflow-hidden">
            <div className="overflow-y-auto flex-grow">
                {renderParameterGroup("Lungs Parameters", lungsParameters)}
                {renderParameterGroup("Patient Parameters", patientParameters)}
            </div>
        </div>
    );
}

export default DataLayer;