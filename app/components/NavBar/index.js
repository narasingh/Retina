import React from 'react';
import {
  View,
  Dimensions,
} from 'react-native';
import { PropTypes } from 'prop-types';
import { Button, Text } from 'react-native-elements';
import * as _ from 'lodash';
import styles from './styles';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: undefined,
    };
  }

  _renderRight(headerRight) {
    const windowWidth = Dimensions.get('window').width;
    const width = this.state.width
      ? (windowWidth - this.state.width) / 2
      : undefined;

    return headerRight && (
      <View style={[{ width }, styles.right]}>{headerRight}</View>
    );
  }

  _renderLeft(headerLeft) {
    if (headerLeft) {
      return (
        <View style={styles.left}>{headerLeft}</View>
      );
    }

    const windowWidth = Dimensions.get('window').width;
    const width = this.state.width
      ? (windowWidth - this.state.width) / 2
      : undefined;

    const renderLeftContent = () => {
      const index = _.findIndex(this.props.headerProps.scenes, { isActive: true });
      if (index > 0) {
        return (
          <Button
            style={styles.menu}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <Text>Left</Text>
          </Button>
        );
      }
      return (
        <Button
          style={styles.menu}
          onPress={() => {
            this.props.navigation.navigate('DrawerOpen');
          }}
        >
          <Text>Right</Text>
        </Button>
      );
    };

    return (
      <View style={[{ width }, styles.left]}>
        {renderLeftContent()}
      </View>
    );
  }

  _renderTitle(title, headerTitle) {
    if (headerTitle) {
      return (
        <View style={styles.title} onLayout={onLayout}>{headerTitle}</View>);
    }

    const onLayout = (e) => {
      this.setState({
        width: e.nativeEvent.layout.width,
      });
    };

    return (
      <View style={styles.title} onLayout={onLayout}>
        <Text>{title}</Text>
      </View>
    );
  }

  render() {
    const options = this.props.headerProps.getScreenDetails(this.props.headerProps.scene).options;

    return (
      <View style={styles.layout}>
        <View style={styles.container}>
          {this._renderTitle(options.title, options.headerTitle)}
          {this._renderLeft(options.headerLeft)}
          {this._renderRight(options.headerRight)}
        </View>
      </View>
    );
  }
}

NavBar.propTypes = {
  headerProps: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default NavBar;
