import React, { useEffect, useState } from 'react';
import {
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import UserProfileScreen from '../screens/UserProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import LiveStreamingScreen from '../screens/LiveStreamingScreen';
import MovieMenueScreen from '../screens/MovieMenueScreen';
import SocialScreen from '../screens/SocialScreen';
import ScriptScreen from '../screens/ScriptScreen';
import MusicScreen from '../screens/MusicScreen';

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
      <Stack.Screen
        name={'EditProfileScreen'}
        options={{ headerShown: false }}
        component={EditProfileScreen}>
      </Stack.Screen>
      <Stack.Screen
        name={'SearchScreen'}
        options={{ headerShown: false }}
        component={SearchScreen}>
      </Stack.Screen>
      <Stack.Screen
        name={'LiveStreamingScreen'}
        options={{ headerShown: false }}
        component={LiveStreamingScreen}>
      </Stack.Screen>
      <Stack.Screen
        name={'MovieMenueScreen'}
        options={{ headerShown: false }}
        component={MovieMenueScreen}>
      </Stack.Screen>
      <Stack.Screen
        name={'SocialScreen'}
        options={{ headerShown: false }}
        component={SocialScreen}>
      </Stack.Screen>
      <Stack.Screen
        name={'ScriptScreen'}
        options={{ headerShown: false }}
        component={ScriptScreen}>
      </Stack.Screen>
      <Stack.Screen
        name={'MusicScreen'}
        options={{ headerShown: false }}
        component={MusicScreen}>
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
