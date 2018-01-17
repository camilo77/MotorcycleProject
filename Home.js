import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  Animated,
  Dimensions,
  StatusBar } from 'react-native';
import Card from './Components/Card';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0), // state to control the scroll event
    };
  }
  // method to set navigator options ( provided by react navigation )
  static navigationOptions = {
    title: 'Home',
    header: null
  };

  // method to return the header of the home screen
  _renderHeader() {

    // function to get the header height
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [ 0, HEADER_SCROLL_DISTANCE ],
      outputRange: [ HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT ],
      extrapolate: 'clamp',
    });

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [ 0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE ],
      outputRange: [ 1, 1, 0 ],
      extrapolate: 'clamp',
    });

    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [ 0, HEADER_SCROLL_DISTANCE ],
      outputRange: [ 0, -50 ],
      extrapolate: 'clamp',
    });

    const searchBarOpacity = this.state.scrollY.interpolate({
      inputRange: [ 0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE ],
      outputRange: [ 0.2, 0.2, 0 ],
      extrapolate: 'clamp',
    });

    return (
      /* --- Animated header --- */
      <Animated.View
        style =
        {[
          styles.header,
          { height: headerHeight }
        ]}
      >
        { /* --- Animated Image of the header --- */ }
        <Animated.Image
          style = {[
            styles.backgroundImage,
            { opacity: imageOpacity,
              transform: [ { translateY: imageTranslate } ]
            },
          ]}
          source = { require('./images/header.png') }
        />
        { /* --- Animated search bar of the header --- */ }
        <Animated.View
          style = {[
            styles.search,
            { opacity: searchBarOpacity }
          ]}
        >
        </Animated.View>
      </Animated.View>
    );
  }

  // method to return the content of the scrollView
  _renderScrollViewContent(){

    // prop to dispacth navigation actions
    const { navigate } = this.props.navigation;

    return(
      <View style={ styles.scrollViewContent }>
        <Card
          image = { require('./images/headerCard1.png') }
          style = { { width: WINDOW.width * 0.8, height: WINDOW.width * 0.8, marginBottom: 40, } }
          title = 'LavaAliados'
          paragraph = 'Encuentra todos los lugares para cuidar la estética de tu máquinaaaaa'
        />

        <Button
          onPress={() => navigate('Mapa')}
          title="Mapa"
        />

        <View style = { styles.section2 } >
          <ScrollView
            horizontal = { true }
            showsHorizontalScrollIndicator = { false }
            style={ { paddingLeft: WINDOW.width * 0.1 / 2 }
          }>
            <Card
              image = { require('./images/headerCard2.jpg') }
              style = { { width: WINDOW.width * 0.9 / 2, height: WINDOW.width * 0.6, } }
              title = 'MecaAliados'
            />
            <Card
              image = { require('./images/headerCard3.jpg') }
              style = { { width: WINDOW.width * 0.9 / 2, height: WINDOW.width * 0.6, } }
              title = 'Accesorios'
            />
            <Card
              image = { require('./images/headerCard2.jpg') }
              style = { { width: WINDOW.width * 0.9 / 2, height: WINDOW.width * 0.6, } }
              title = 'MecaAliados'
            />
            <Card
              image = { require('./images/headerCard3.jpg') }
              style = { { width: WINDOW.width * 0.9 / 2 , height: WINDOW.width * 0.6, } }
              title = 'Accesorios'
            />
          </ScrollView>
        </View>

        <Card
          image = { require('./images/headerCard4.jpg') }
          style = { { width: WINDOW.width * 0.8, height: WINDOW.width * 0.8, } }
        />

      </View>
    );
  }

  // Default method that returns the component elements
  render() {
    return (
      <View style = { [ styles.fill, { backgroundColor: 'white' } ] } >
        { /*  --- Header of the screen ---  */ }
        { this._renderHeader() }

        { /*  --- Body of the screen ---  */ }
        <ScrollView
          showsVerticalScrollIndicator = { false }
          style = { styles.fill }
          scrollEventThrottle = {16}
          onScroll = { Animated.event (
            [ { nativeEvent: { contentOffset: { y: this.state.scrollY } } } ]
          ) }
        >
          { this._renderScrollViewContent() }
        </ScrollView>

        { /*  --- Footer of the screen ---  */ }
        <View style={ styles.footer }>
        </View>
      </View>
    );
  }
}

/* --- Const to define heights and some global properties
       for the component --- */
const HEADER_MAX_HEIGHT = 220;
const HEADER_MIN_HEIGHT = 70;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const FOOTER_HEIGHT = 50;
const WINDOW = Dimensions.get('window');

/* --- styles of the component Home--- */
const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    overflow: 'hidden',
    elevation: 3,
  },
  search:{
    margin: 35,
    height: 36,
    backgroundColor: 'white',
    borderRadius: 4,
    elevation: 10,
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT + 40,
    marginBottom: FOOTER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  section2: {
    width: WINDOW.width,
    height: WINDOW.width * 0.6,
    borderRadius: 4,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'white',
    elevation: 3,
  }
});
