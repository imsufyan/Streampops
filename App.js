import * as React from 'react';
import { View, Text, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation'

function App() {
  LogBox.ignoreAllLogs();
  return (
    <Navigation />
  );
}

export default App;