// Dashboard.js
import React from 'react';
import { Grid, Box } from '@mui/material';
import DataLayer from './DataLayer/DataLayer';
import ECMOLayer from './ECMOLayer/ECMOLayer';
import MLLayer from './MLLayer/MLLayer';

function Dashboard() {
  return (
    <Grid container spacing={2} sx={{ height: '100%' }}>
      {/* Data Layer */}
      {/* <Grid item xs={3}>
        <Box sx={{
          backgroundColor: 'background.paper',
          padding: '20px',
          borderRadius: '10px',
          height: '100%',
          overflow: 'auto'
        }}>
          <DataLayer />
        </Box>
      </Grid> */}

      {/* ECMO Layer */}
      <Grid item xs={6}>
        <Box sx={{
          backgroundColor: '#190482',
          padding: '20px',
          borderRadius: '10px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Box sx={{
            flexGrow: 1,
            backgroundColor: 'WHITE',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <ECMOLayer />
          </Box>
        </Box>
      </Grid>

      {/* ML Layer */}
      <Grid item xs={3}>
        <Box sx={{
          backgroundColor: 'background.paper',
          padding: '20px',
          borderRadius: '10px',
          height: '100%',
          overflow: 'auto'
        }}>
          <MLLayer />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
