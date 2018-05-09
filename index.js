import React from 'react';
import { AppRegistry } from 'react-native';
import App from './app/app';

export default class Main extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('tmdb', () => Main);
