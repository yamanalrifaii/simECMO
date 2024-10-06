import React from 'react';

const OutputParameters = ({ hemodynamics, bloodGases, pressures }) => {
  const renderTwoColumnTable = (data) => {
    const entries = Object.entries(data);
    return (
      <table className="w-full text-xs">
        <tbody className="bg-white">
          {Array(Math.ceil(entries.length / 2)).fill().map((_, rowIndex) => (
            <tr key={rowIndex}>
              {entries.slice(rowIndex * 2, rowIndex * 2 + 2).map(([key, value]) => (
                <React.Fragment key={key}>
                  <td className="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-900">{key}</td>
                  <td className="px-2 py-1 whitespace-nowrap text-sm text-right text-gray-500">{parseFloat(value).toFixed(2)}</td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="p-2 bg-white rounded-lg shadow">
      {/* Hemodynamics */}
      <div className="mb-4 bg-gray-700 rounded overflow-hidden">
        <h3 className="text-white text-sm font-semibold p-2">Hemodynamics</h3>
        {renderTwoColumnTable(hemodynamics)}
      </div>

      {/* Blood Gases */}
      <div className="mb-4 bg-gray-700 rounded overflow-hidden">
        <h3 className="text-white text-sm font-semibold p-2">Blood Gases</h3>
        <table className="w-full text-xs">
          <thead>
            <tr>
              <th className="px-2 py-1 text-left font-medium text-gray-500 uppercase tracking-wider bg-white"></th>
              <th className="px-2 py-1 text-left font-medium text-gray-500 uppercase tracking-wider bg-white">Arterial</th>
              <th className="px-2 py-1 text-center font-medium text-gray-500 uppercase tracking-wider bg-white">Venous</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {Object.entries(bloodGases).map(([key, values]) => (
              <tr key={key}>
                <td className="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-900">{key}</td>
                {typeof values === 'object' ? (
                  <>
                    <td className="px-2 py-1 whitespace-nowrap text-sm text-right text-gray-500">{parseFloat(values.arterial).toFixed(2)}</td>
                    <td className="px-2 py-1 whitespace-nowrap text-sm text-right text-gray-500">{parseFloat(values.venous).toFixed(2)}</td>
                  </>
                ) : (
                  <td className="px-2 py-1 whitespace-nowrap text-sm text-center text-gray-500" colSpan="3">
                    {parseFloat(values).toFixed(2)}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pressures */}
      <div className="mb-4 bg-gray-700 rounded overflow-hidden">
        <h3 className="text-white text-sm font-semibold p-2">Pressures</h3>
        {renderTwoColumnTable(pressures)}
      </div>
    </div>
  );
};

export default OutputParameters;


// import React from 'react';

// const OutputParameters = ({ hemodynamics, bloodGases, pressures }) => {
//   const renderTwoColumnTable = (data) => {
//     const entries = Object.entries(data);
//     return (
//       <table className="w-full text-xs">
//         <tbody className="bg-white">
//           {Array(Math.ceil(entries.length / 2)).fill().map((_, rowIndex) => (
//             <tr key={rowIndex}>
//               {entries.slice(rowIndex * 2, rowIndex * 2 + 2).map(([key, value]) => (
//                 <React.Fragment key={key}>
//                   <td className="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-900">{key}</td>
//                   <td className="px-2 py-1 whitespace-nowrap text-sm text-right text-gray-500">{parseFloat(value).toFixed(2)}</td>
//                 </React.Fragment>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   return (
//     <div className="p-2 bg-white rounded-lg shadow">
//       {/* Hemodynamics */}
//       <div className="mb-4 bg-gray-700 rounded overflow-hidden">
//         <h3 className="text-white text-sm font-semibold p-2">Hemodynamics</h3>
//         {renderTwoColumnTable(hemodynamics)}
//       </div>

//       {/* Blood Gases */}
//       <div className="mb-4 bg-gray-700 rounded overflow-hidden">
//         <h3 className="text-white text-sm font-semibold p-2">Blood Gases</h3>
//         <table className="w-full text-xs">
//           <thead>
//             <tr>
//               <th className="px-2 py-1 text-left font-medium text-gray-500 uppercase tracking-wider bg-white"></th>
//               <th className="px-2 py-1 text-left font-medium text-gray-500 uppercase tracking-wider bg-white">Arterial</th>
//               <th className="px-2 py-1 text-center font-medium text-gray-500 uppercase tracking-wider bg-white">Venous</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white">
//             {Object.entries(bloodGases).map(([key, values]) => (
//               <tr key={key}>
//                 <td className="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-900">{key}</td>
//                 {typeof values === 'object' ? (
//                   <>
//                     <td className="px-2 py-1 whitespace-nowrap text-sm text-right text-gray-500">{parseFloat(values.arterial).toFixed(2)}</td>
//                     <td className="px-2 py-1 whitespace-nowrap text-sm text-right text-gray-500">{parseFloat(values.venous).toFixed(2)}</td>
//                   </>
//                 ) : (
//                   <td className="px-2 py-1 whitespace-nowrap text-sm text-center text-gray-500" colSpan="3">
//                     {parseFloat(values).toFixed(2)}
//                   </td>
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pressures */}
//       <div className="mb-4 bg-gray-700 rounded overflow-hidden">
//         <h3 className="text-white text-sm font-semibold p-2">Pressures</h3>
//         {renderTwoColumnTable(pressures)}
//       </div>
//     </div>
//   );
// };

// export default OutputParameters;
