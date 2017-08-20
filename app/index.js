import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UsersScreen from './routes/Users'
import UserDetailsScreen from './routes/UserDetails'
import {
  StackNavigator,
} from 'react-navigation';

const BasicApp = StackNavigator({
  Main: {screen: UsersScreen},
  PlayerDetails: {screen: UserDetailsScreen},
}, { headerMode: 'screen' })

export default BasicApp
