import React from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import configureStore from './store/configureStore';
import AppNavigation from './utils/navigator';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppNavigation />
        </Root>
      </Provider>
    );
  }
}
