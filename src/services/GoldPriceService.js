// GoldPriceService.js
import apiRequest from '../Axios';

class GoldPriceService {
  static async getGoldPrices(symbol = 'Gold', currency = 'USD', date = 'latest') {
    try {
      const result = await apiRequest(`${symbol},${currency}`, 'GET');

      if (!result.success) {
        throw new Error(result.message || 'Failed to fetch gold prices');
      }

      const goldRates = result.rates;

      if (!goldRates) {
        throw new Error('Gold rate data not found in the API response');
      }

      // Extract gold price based on the provided symbol
      const goldPrice = goldRates[symbol];

      if (!goldPrice) {
        throw new Error(`Gold price for ${symbol} not found in the API response`);
      }

      return [
        {
          id: 1,
          price: goldPrice,
          date: result.date,
        },
        // Add more data as needed
      ];
    } catch (error) {
      console.error('API Error:', error.message);
      throw error;
    }
  }
}

export default GoldPriceService;
