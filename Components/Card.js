import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight } from 'react-native';

export default class Card extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return(
      <TouchableHighlight
        style = { this.props.style } // styles to define height and width
        onPress = {this._onPressButton}
        underlayColor = "white"
      >
        <View style = { [ styles.card, ] }>
          { /* --- Card's header, here is image ---*/ }
          <View style = { styles.headerCard }>
            <Image
              style = { styles.imageCard }
              source = { this.props.image } // prop for image source
            />
          </View>
          { /* --- Card's body, here are title and text ---*/ }
          <View style = {[
              styles.bodyCard,
              this.props.bodyStyle // optional styles to body
            ]}
          >
            { /* --- Card's content ---*/ }
            <View style = { styles.contentCard }>
              <Text>{this.props.title}</Text>
              <Text>{this.props.paragraph}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    flex: 1,
  },
  headerCard: {
    position: 'absolute',
    top: '4%',
    left: '4%',
    right: '4%',
    bottom: '50%',
    borderRadius: 4,
    backgroundColor: 'white',
    elevation: 5,
  },
  imageCard: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 4,
  },
  bodyCard: {
    position: 'absolute',
    top: '4%',
    left: '6%',
    right: '6%',
    bottom: '5%',
    borderRadius: 4,
    backgroundColor: 'white',
    elevation: 4,
  },
  contentCard: {
    position: 'absolute',
    top: '51%',
    left: 5,
    right: 5,
    bottom: 0,
    alignItems: 'center',
  },
});
