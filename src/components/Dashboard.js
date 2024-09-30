import React from 'react';
import DataLayer from './DataLayer/DataLayer';
import ECMOLayer from './ECMOLayer/ECMOLayer';
import MLLayer from './MLLayer/MLLayer';

function Dashboard() {
  return (
    <div className="min-h-screen bg-white p-2 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0">
        {/* Data Layer */}
        <div className="w-full lg:w-1/5 bg-gray-100 rounded-lg shadow-lg p-2">
          <h2 className="text-lg font-semibold text-gray-700 text-center mb-2">Data Layer</h2>
          <div className="overflow-auto max-h-[calc(100vh-100px)] lg:max-h-[calc(100vh-150px)]">
            <DataLayer />
          </div>
        </div>

        {/* ECMO Layer */}
        <div className="w-full lg:w-3/5 bg-gray-100 rounded-lg shadow-lg p-2">
          <h2 className="text-lg font-semibold mb-2 text-gray-700 text-center">ECMO Layer</h2>
          <div className="overflow-auto max-h-[calc(100vh-100px)] lg:max-h-[calc(100vh-150px)]">
            <ECMOLayer />
          </div>
        </div>

        {/* ML Layer */}
        <div className="w-full lg:w-1/5 bg-gray-100 rounded-lg shadow-lg p-2">
          <h2 className="text-lg font-semibold mb-2 text-gray-700 text-center">ML Layer</h2>
          <div className="overflow-auto max-h-[calc(100vh-100px)] lg:max-h-[calc(100vh-150px)]">
            <MLLayer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

// function Dashboard() {
//   return (
//     <Grid container spacing={2} sx={{ height: '100%' }}>
//       {/* Data Layer */}
//       <Grid item xs={3}>
//         <Box sx={{
//           backgroundColor: 'background.paper',
//           padding: '20px',
//           borderRadius: '10px',
//           height: '100%',
//           overflow: 'auto'
//         }}>
//           <DataLayer />
//         </Box>
//       </Grid>

//       {/* ECMO Layer */}
//       <Grid item xs={6}>
//         <Box sx={{
//           backgroundColor: '#190482',
//           padding: '20px',
//           borderRadius: '10px',
//           height: '100%',
//           display: 'flex',
//           flexDirection: 'column'
//         }}>
//           <Box sx={{
//             flexGrow: 1,
//             backgroundColor: 'WHITE',
//             borderRadius: '10px',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center'
//           }}>
//             <ECMOLayer />
//           </Box>
//         </Box>
//       </Grid>

//       {/* ML Layer */}
//       <Grid item xs={3}>
//         <Box sx={{
//           backgroundColor: 'background.paper',
//           padding: '20px',
//           borderRadius: '10px',
//           height: '100%',
//           overflow: 'auto'
//         }}>
//           <MLLayer />
//         </Box>
//       </Grid>
//     </Grid>
//   );
// }
