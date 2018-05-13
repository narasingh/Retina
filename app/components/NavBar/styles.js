import { StyleSheet } from 'react-native';
import { UIConstants } from '../../config/AppConstants';

const styles = StyleSheet.create({
  layout: {
    backgroundColor: 'black',
    paddingTop: UIConstants.StatusbarHeight,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
  },
  container: {
    flexDirection: 'row',
    height: UIConstants.AppbarHeight,
  },
  left: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  right: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  title: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    width: 40,
  },
});

export default styles;
