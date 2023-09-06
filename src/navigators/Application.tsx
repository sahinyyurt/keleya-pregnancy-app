import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { Intro, Login, Register } from '../screens';
import { useTheme } from '../hooks';
import MainNavigator from './Main';
import { useFlipper } from '@react-navigation/devtools';
import { ApplicationStackParamList } from '../../@types/navigation';
import { useSelector } from 'react-redux';
import { UserState } from '@/store/user';
import { Header } from '@/components';

const Stack = createStackNavigator<ApplicationStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  const { darkMode, NavigationTheme } = useTheme();
  const activeUser = useSelector(
    (state: { user: UserState }) => state.user?.activeUser,
  );

  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!activeUser ? (
          <>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: true, header: Header }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: true, header: Header }}
            />
          </>
        ) : (
          <Stack.Screen name="Main" component={MainNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
