import React from 'react';
import { PropTypes } from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import AppNavigator from './navigationStack';

class AppNavigation extends React.Component {
  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({ dispatch, state: navigationState })}
      />
    );
  }
}

const mapStateToProps = (state: Object) => {
  return {
    navigationState: state.navigation,
  };
};

AppNavigation.propTypes = {
  navigationState: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(AppNavigation);
