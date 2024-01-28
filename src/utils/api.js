// api.js
const BASE_URL = 'https://www.goldapi.io/api';
const API_KEY = 'goldapi-1db5oxrlrxf6yrv-io';

const apiRequest = async (symbol, currency, date, method = 'GET', data = null) => {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': API_KEY,
    },
  };

  let apiUrl = `${BASE_URL}/${symbol}/${currency}/${date}`;

  if (data) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(apiUrl, config);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Something went wrong');
    }

    return result;
  } catch (error) {
    console.error('API Error:', error.message);
    throw error;
  }
};

const getGoldPrices = async () => {
  try {
    // Replace 'Gold', 'USD', and 'latest' with actual values
    const result = await apiRequest('Gold', 'USD', 'latest');
    return result;
  } catch (error) {
    throw error;
  }
};

export default {
  getGoldPrices,
  // Add more API functions as needed
};
