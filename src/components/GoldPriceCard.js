import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoldPriceCard = ({ price, date }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Gold Price</Text>
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  date: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
  },
});

export default GoldPriceCard;
