import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Techs from './pages/Techs';
import Details from './pages/TechDetails';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Techs"
          component={Techs}
          options={{ title: 'Techs', headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ title: 'Details', headerTitleAlign: 'center' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
