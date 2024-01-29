// App.js
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getGoldPrices } from './src/utils/api';

export default function App() {
  const [goldPrices, setGoldPrices] = useState(null);

  useEffect(() => {
    const fetchGoldPrices = async () => {
      try {
        const data = await getGoldPrices();
        setGoldPrices(data);
      } catch (error) {
        console.error('Error fetching gold prices:', error.message);
      }
    };

    fetchGoldPrices();
  }, []);

  return (
    <View style={styles.container}>
      {goldPrices ? (
        <View>
          <Text>Gold Price App</Text>
          <Text>Silver Rate: ${goldPrices.silverRate} per gram</Text>
          <Text>Gold Rate: ${goldPrices.goldRate} per gram</Text>
          <Text>Palladium Rate: ${goldPrices.palladiumRate} per gram</Text>
          <Text>Platinum Rate: ${goldPrices.platinumRate} per gram</Text>
          <Text>Rhodium Rate: ${goldPrices.rhodiumRate} per gram</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
