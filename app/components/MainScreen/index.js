import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import AppWrapper from '../Shared/Wrapper/';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppWrapper>
        <View>
          <Text style={{ color: '#fff', textAlign: 'center' }}>Retina</Text>
        </View>
      </AppWrapper>
    );
  }
}

export default MainScreen;
