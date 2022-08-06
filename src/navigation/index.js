import React, { useEffect, useState } from 'react';
import {
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import UserProfileScreen from '../screens/UserProfileScreen'

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    null
  );
};

const HomeStack = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'UserProfileScreen'}
        options={{ headerShown: false }}
        component={UserProfileScreen}>
      </Stack.Screen>
    </Stack.Navigator>
  );
};


const Navigation = () => {

  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        {isSignedIn ? (
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={HomeStack}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;