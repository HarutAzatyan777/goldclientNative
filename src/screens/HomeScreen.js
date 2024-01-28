// HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import GoldPriceCard from '../components/GoldPriceCard';
import api from '../services/GoldPriceService'; // Updated import statement

const HomeScreen = () => {
  const [goldPrice, setGoldPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGoldPrice = async () => {
      try {
        const result = await api.getGoldPrices();
        // Assuming gold price data is available in the "rates" property
        const goldPrices = result?.rates?.['Gold(USDXAU)'];

        if (goldPrices) {
          setGoldPrice({
            price: goldPrices,
            date: result.date,
          });
        } else {
          throw new Error('Gold price data not found in the API response');
        }
      } catch (error) {
        setError(error.message || 'Failed to fetch gold prices');
      } finally {
        setLoading(false);
      }
    };

    fetchGoldPrice();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gold Price App</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <GoldPriceCard price={goldPrice?.price} date={goldPrice?.date} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;
