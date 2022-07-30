// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PanResponderScreen from '../components/PanResponderScreen';
import Demo from '../components/Demo';


const Stack = createNativeStackNavigator();

function Routes() {
  return (
      <Stack.Navigator initialRouteName='Demo' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name="Home" component={PanResponderScreen} />
      </Stack.Navigator>
    
  );
}

export default Routes;