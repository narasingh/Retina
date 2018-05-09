import AppNavigator from '../utils/navigationStack';

const initialState =
AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('LandingScreen'));

const navigationReducer = (state = initialState, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navigationReducer;
