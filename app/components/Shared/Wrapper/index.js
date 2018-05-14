import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { PropTypes } from 'prop-types';

const BG_IMAGE = require('../../../../assets/background.jpg');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground
        style={styles.bgImage}
        source={BG_IMAGE}
      >
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});

AppWrapper.propTypes = {
  children: PropTypes.object.isRequired,
};

export default AppWrapper;
