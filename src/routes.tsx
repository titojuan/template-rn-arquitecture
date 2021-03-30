import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@pages/HomeScreen'
import PersonScreen from '@pages/PersonScreen'

const { Navigator, Screen } = createStackNavigator();

export type RootStackParamList = {
  HomeScreen: undefined;
  PersonScreen: undefined;
};

const Routes: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="PersonScreen" component={PersonScreen} />
    </Navigator>
  );
};

export default Routes;
