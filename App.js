// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoldPriceScreen from './src/screens/GoldPriceScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GoldPrices" component={GoldPriceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
