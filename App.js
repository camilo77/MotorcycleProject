import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableHighlight,
  Animated,
  Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Mapa from './Mapa';

const SimpleApp = StackNavigator({
  Home: { screen: Home },
  Mapa: { screen: Mapa }
});


export default class App extends Component {
  render() {
    return(
      <SimpleApp/>
    );
  }
}
