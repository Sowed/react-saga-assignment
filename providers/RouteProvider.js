import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../components/HomeScreen';
import UserDetails from '../components/UserDetails';

export default class RouteProvider extends Component {
  render() {
    const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Users" component={HomeScreen} />
          <Stack.Screen name="User Details" component={UserDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
