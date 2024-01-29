// api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your actual server URL
});

export const getGoldPrices = async () => {
  try {
    const response = await instance.get('/gold-prices');
    return response.data;
  } catch (error) {
    console.error('API Error:', error.message);
    throw error;
  }
};
