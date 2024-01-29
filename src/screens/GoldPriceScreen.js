import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const GoldPriceScreen = () => {
  const [goldPrices, setGoldPrices] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this with your actual fetch URL
    fetch('http://localhost:3000/gold-prices')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched gold prices:', data);

        // Calculate gold rate in USD
        const goldRateInUSD = 1 / data.goldRate;

        setGoldPrices({ ...data, goldRateInUSD }); // Include calculated gold rate in USD
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching gold prices:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gold Prices</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Date: {goldPrices?.date}</Text>
          <Text style={styles.priceText}>Base: {goldPrices?.base}</Text>

          {/* Display the calculated gold rate in USD */}
          <Text style={styles.priceText}>Gold Rate (USD): ${goldPrices?.goldRateInUSD.toFixed(6)} per gram</Text>

          {/* Display the original gold rate */}
          <Text style={styles.priceText}>Gold Rate: ${goldPrices?.goldRate.toFixed(6)} per gram</Text>
          
          <Text style={styles.priceText}>Silver Rate: ${goldPrices?.silverRate.toFixed(6)} per gram</Text>
          <Text style={styles.priceText}>Palladium Rate: ${goldPrices?.palladiumRate.toFixed(6)} per gram</Text>
          <Text style={styles.priceText}>Platinum Rate: ${goldPrices?.platinumRate.toFixed(6)} per gram</Text>
          <Text style={styles.priceText}>Rhodium Rate: ${goldPrices?.rhodiumRate.toFixed(6)} per gram</Text>
        </View>
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  priceContainer: {
    alignItems: 'center',
  },
  priceText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default GoldPriceScreen;
