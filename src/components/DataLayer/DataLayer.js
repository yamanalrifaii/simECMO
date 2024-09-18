// import React, { useState } from 'react';
// import '../../css/DataLayer.css';
// import { Box, useColorModeValue } from '@chakra-ui/react';


// function DataLayer() {
//   const bgColor = useColorModeValue('gray.100', 'gray.800');  // Light and dark mode backgrounds
//   const [data, setData] = useState({
//     ph: '7.36',
//     hct: '45.0',
//     pco2: '1.2',
//     hgb: '15',
//     po2: '3.4',
//     svo2: '78%',
//     hco3: '5.6',
//     be: '-3.0',
//     temp_cdi: '37.0',
//     sao2: '100%',
//     temp_physio: '37.0',
//     rr: '12',
//     hr: '140',
//     o2sat: '99%',
//     bp: '58/40',
//     cvp: '10',
//     pip: '25',
//     fio2: '30%',
//     peep: '10',
//     map: '15',
//     rate: '12',
//     spo2: '97%',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const text = e.target.result;
//         const parsedData = parseCSV(text);
//         setData(parsedData);
//       };
//       reader.readAsText(file);
//     }
//   };

//   const parseCSV = (text) => {
//     const lines = text.split('\n');
//     const parsedData = {};
//     lines.forEach((line) => {
//       const [key, value] = line.split(',');
//       parsedData[key.trim()] = value.trim();
//     });
//     return parsedData;
//   };

//   return (
//     <div className="data-layer">
//       <h1>Data Layer</h1>
//       <div className="data-table">
//         <div className="component">
//           <div className="monitor-table">
//             <h2>CDI Monitor</h2>
//             <table>
//               <tbody>
//                 <tr>
//                   <td>pH</td>
//                   <td><input type="text" value={data.ph} name="ph" onChange={handleChange} /></td>
//                   <td>HCT</td>
//                   <td><input type="text" value={data.hct} name="hct" onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>pCO2</td>
//                   <td><input type="text" value={data.pco2} name="pco2" onChange={handleChange} /></td>
//                   <td>Hgb</td>
//                   <td><input type="text" value={data.hgb} name="hgb" onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>pO2</td>
//                   <td><input type="text" value={data.po2} name="po2" onChange={handleChange} /></td>
//                   <td>SvO2</td>
//                   <td><input type="text" value={data.svo2} name="svo2" onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>HCO3</td>
//                   <td><input type="text" value={data.hco3} name="hco3" onChange={handleChange} /></td>
//                   <td>BE</td>
//                   <td><input type="text" value={data.be} name="be" onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>Temp</td>
//                   <td><input type="text" value={data.temp_cdi} name="temp_cdi" onChange={handleChange} /></td>
//                   <td>SaO2</td>
//                   <td><input type="text" value={data.sao2} name="sao2" onChange={handleChange} /></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//         {/* Repeat for Physiological Monitor and Ventilator Tables */}
//         <div className="component">
//           <div className="phys-table">
//             <h2>Physiological Monitor</h2>
//             <table>
//               <tbody>
//                 <tr>
//                   <td>Temp</td>
//                   <td><input type="text" value={data.temp_physio} name="temp_physio" onChange={handleChange} /></td>
//                   <td>RR</td>
//                   <td><input type="text" value={data.rr} name="rr" onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>HR</td>
//                   <td><input type="text" value={data.hr} name="hr" onChange={handleChange} /></td>
//                   <td>O2 Sat</td>
//                   <td><input type="text" value={data.o2sat} name="o2sat" onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>BP</td>
//                   <td><input type="text" value={data.bp} name="bp" onChange={handleChange} /></td>
//                   <td>CVP</td>
//                   <td><input type="text" value={data.cvp} name="cvp" onChange={handleChange} /></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className="component">
//           <div className="vent-table">
//             <h2>Ventilator</h2>
//             <table>
//               <tbody>
//                 <tr>
//                   <td>PIP</td>
//                   <td><input type="text" value={data.pip} name="pip" onChange={handleChange} /></td>
//                   <td>FiO2</td>
//                   <td><input type="text" value={data.fio2} name="fio2" onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>PEEP</td>
//                   <td><input type="text" value={data.peep} name="peep" onChange={handleChange} /></td>
//                   <td>MAP</td>
//                   <td><input type="text" value={data.map} name="map" onChange={handleChange} /></td>
//                 </tr>
//                 <tr>
//                   <td>Rate</td>
//                   <td><input type="text" value={data.rate} name="rate" onChange={handleChange} /></td>
//                   <td>SpO2</td>
//                   <td><input type="text" value={data.spo2} name="spo2" onChange={handleChange} /></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className="component upload-section">
//           <input type="file" id="fileInput" accept=".csv" style={{ display: 'none' }} onChange={handleFileUpload} />
//           <button id="uploadButton" onClick={() => document.getElementById('fileInput').click()}>Upload Data File</button>
//         </div>
//       </div>
//     </div>
    
//   );
// }

// export default DataLayer;
