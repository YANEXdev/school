import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { WebView } from 'react-native-webview';

import AssetExample from './components/AssetExample';

import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView style={styles.container}source={{ uri: 'https://school115.pythonanywhere.com' }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 0,
  },
});
