import axiosClient from '../axiosClient';

export const fetchValues = async (token: string) => {
  try {
    const response = await axiosClient.get('/values', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching values', error);
    throw error;
  }
};

export const fetchValueById = async (id: string, token: string) => {
  try {
    const response = await axiosClient.get(`/values/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching value by ID', error);
    throw error;
  }
};
