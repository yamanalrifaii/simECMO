import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchScenarios = () => axios.get(`${API_URL}/scenarios`);
export const fetchScenario = (id) => axios.get(`${API_URL}/scenarios/${id}`);
export const createSession = (data) => axios.post(`${API_URL}/sessions`, data);
export const updateSession = (id, data) => axios.put(`${API_URL}/sessions/${id}`, data);
export const fetchLatestData = () => axios.get(`${API_URL}/data/latest`);
export const updateData = (data) => axios.put(`${API_URL}/data/update`, data);

console.log('fetchScenario is exported:', typeof fetchScenario === 'function');
