/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/
import React from 'react';
import { View } from 'react-native';
import RandomName from './App/Pages/Home'
import Article from './App/Pages/Article'
import LogoTitle from './App/Components/Logo'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const stackNav = createStackNavigator({
  home: {screen: RandomName},
  article: {screen: Article}
},
{
  defaultNavigationOptions: {
    headerTitle: () => (
    <View>
      <LogoTitle />
    </View>),
  }
});

const MyApp = createAppContainer(stackNav);
export default MyApp;
