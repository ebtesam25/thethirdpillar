import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/home';
import Wishlist from './screens/wishlist';
import RetreieveSadaqah from './screens/retrievesadaqah';
import SendGift from './screens/sendGift';
import Zakat from './screens/zakat';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
       
       <Stack.Screen 
        name="Home" 
        component={Home}
        options={{ headerShown: false}} 
        /> 
        <Stack.Screen 
        name="Wishlist" 
        component={Wishlist}
        options={{ headerShown: false}} 
        /> 
        <Stack.Screen 
        name="RetreieveSadaqah" 
        component={RetreieveSadaqah}
        options={{ headerShown: false}} 
        /> 
         <Stack.Screen 
        name="SendGift" 
        component={SendGift}
        options={{ headerShown: false}} 
        /> 

        <Stack.Screen 
        name="Zakat" 
        component={Zakat}
        options={{ headerShown: false}} 
        /> 
        </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}