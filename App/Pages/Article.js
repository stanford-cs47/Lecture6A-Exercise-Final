/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App(props){

  useEffect(() => console.log(props.navigation.getParam('url')), []);
  return (
    <WebView source={{ uri: props.navigation.getParam('url') }} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});
