// File: backend/models/SimECMOData.js

const mongoose = require('mongoose');

const simECMODataSchema = new mongoose.Schema({
  hemodynamics_bgrinflow_value: Number,
  hemodynamics_bgroutflow_value: Number,
  hemodynamics_bgrgasexchange_value: Number,
  hemodynamics_bgdiffusion_value: Number,
  hemodynamics_sweep_value: Number,
  hemodynamics_fdo2_value: Number,
  hemodynamics_bgrf_value: Number,
  hemodynamics_shuntfraction_value: Number,
  hemodynamics_dlco_value: Number,
  hemodynamics_fio2_value: Number,
  cv_respFrequency_value: Number,
  cv_respTidalVol_value: Number,
  hemodynamics_ventilation_value: Number,
  hemodynamics_mvo2_value: Number,
  hemodynamics_hb_value: Number,
  cv_eeslv_value: Number,
  cv_eesrv_value: Number,
  cv_sysvr_value: Number,
  cv_pulvr_value: Number,
  cv_volume_value: Number,
  cv_heartrate_value: Number,
  hemodynamics_lactate_value: Number,
  hemodynamics_hco3_value: Number,
  ecmo_flow: Number,
  ecmo_speed: Number,
  bgDO2: Number,
  ppcw: Number,
  pcv: Number,
  col: Number,
  cor: Number,
  left_flow: Number,
  right_flow: Number,
  caSys_pH: Number,
  caSys_pCO2: Number,
  cvSys_pCO2: Number,
  cvSys_pH: Number,
  caSys_pO2: Number,
  cvSys_pO2: Number,
  caSys_HCO3: Number,
  cvSys_HCO3: Number,
  caSys_BE: Number,
  cvSys_BE: Number,
  caSys_O2sat: Number,
  cvSys_O2sat: Number,
  hb: Number,
  bgLactate: Number,
  ecmop1: Number,
  ecmop2: Number,
  ecmop3: Number,
  ecmoUnitFlow: Number,
  ps_aops_value: Number,
  ps_aopd_value: Number,
  ps_aopm_value: Number,
  svl: Number,
  svr: Number,
  la_pH: Number,
  la_pCO2: Number,
  la_pO2: Number,
  la_O2sat: Number,
  lv_pH: Number,
  lv_pCO2: Number,
  lv_pO2: Number,
  lv_O2sat: Number,
  rv_pH: Number,
  rv_pCO2: Number,
  rv_pO2: Number,
  rv_O2sat: Number,
  ra_pH: Number,
  ra_pCO2: Number,
  ra_pO2: Number,
  ra_O2sat: Number,
  caSys_BE: Number,
  caSys_CO2Concentration: Number,
  caSys_HCO3: Number,
  caSys_O2Concentration: Number,
  caSys_O2sat: Number,
  caSys_pCO2: Number,
  caSys_pH: Number,
  caSys_pO2: Number,
  caSys_volume: Number,
  cvSys_BE: Number,
  cvSys_CO2Concentration: Number,
  cvSys_HCO3: Number,
  cvSys_O2Concentration: Number,
  cvSys_O2sat: Number,
  cvSys_pCO2: Number,
  cvSys_pH: Number,
  cvSys_pO2: Number,
  cvSys_volume: Number
}, { collection: 'simECMO-Data' });

module.exports = mongoose.model('SimECMOData', simECMODataSchema);