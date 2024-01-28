// GoldPriceService.js
class GoldPriceService {
    static async getGoldPrices(symbol = 'Gold', currency = 'USD', date = 'latest') {
      const API_URL = `https://www.goldapi.io/api/${symbol}/${currency}/${date}?`;
      const API_KEY = 'goldapi-1db5oxrlrxf6yrv-io';
  
      try {
        const response = await fetch(API_URL, {
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': API_KEY,
          },
        });
        const result = await response.json();
  
        if (!response.ok) {
          throw new Error(result.message || 'Failed to fetch gold prices');
        }
  
        // Assuming gold price data is available in the "price" property
        const goldPrices = result?.price;
  
        if (!goldPrices) {
          throw new Error('Gold price data not found in the API response');
        }
  
        return [
          {
            id: 1,
            price: goldPrices,
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
  