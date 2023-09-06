import React from 'react';
import { EnterDue, EnterName, EnterPeriod, Success } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { MainParamsList } from 'types/navigation';
import { Header } from '@/components';
const Stack = createStackNavigator<MainParamsList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: Header,
      }}
    >
      <Stack.Screen name="EnterName" component={EnterName} />
      <Stack.Screen name="EnterDue" component={EnterDue} />
      <Stack.Screen name="EnterPeriod" component={EnterPeriod} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
