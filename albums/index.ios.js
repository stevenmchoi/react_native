// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import { name as appName } from './app.json';

// Create a component
const App = () => (
    <Text>Some Text</Text>
);

// Render it to the device
AppRegistry.registerComponent(appName, () => App);

// /** @format */

// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent(appName, () => App);
