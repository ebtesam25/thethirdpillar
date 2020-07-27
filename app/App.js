import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"

import Login from './screens/login';
import User from './screens/user';
import Admin from './screens/admin';
import Smiles from './screens/smiles';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
  },
  },
  User: {
    screen: User,
    navigationOptions: {
      header: null,
  },
  },
  Admin: {
    screen: Admin
  },
  Smiles: {
    screen: Smiles,
    navigationOptions: {
      header: null,
  },
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAAA1F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});