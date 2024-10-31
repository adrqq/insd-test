import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://test-task-b4cg.onrender.com/api', // Base URL from environment variables
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Optionally set up interceptors
axiosClient.interceptors.request.use((config) => {
  // Add authentication tokens if needed
  return config;
});

export default axiosClient;
