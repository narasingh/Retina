import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import * as _ from 'lodash';

// custom
import * as Screens from '../containers/screens';
import NavBar from '../components/NavBar';

export const Routes = [
  {
    id: 'HomeMenu',
    title: 'Home',
    icon: 'home',
    screen: Screens.HomeContainer,
    children: [],
  },
  {
    id: 'PopularMenu',
    title: 'Popular',
    icon: 'dashboard',
    screen: Screens.HomeContainer,
    children: [],
  },
  {
    id: 'TopratedMenu',
    title: 'Top Rated',
    icon: 'dashboard',
    screen: Screens.HomeContainer,
    children: [],
  },
  {
    id: 'NowPlayingMenu',
    title: 'Now Playing',
    icon: 'dashboard',
    screen: Screens.HomeContainer,
    children: [],
  },
  {
    id: 'ActorsMenu',
    title: 'Popular Actors',
    icon: 'dashboard',
    screen: Screens.HomeContainer,
    children: [],
  },
];

const ThemedNavigationBar = NavBar;

const main = {};
const flatRoutes = {};
_.each(Routes, (route, index) => {
  const wrapToRoute = (r) => {
    return {
      screen: r.screen,
      title: route.title,
    };
  };

  flatRoutes[route.id] = wrapToRoute(route);
  main[route.id] = wrapToRoute(route);
  for (let child of route.children) {
    flatRoutes[child.id] = wrapToRoute(child);
  }
});

const DrawerRoutes = Object.keys(main).reduce((routes, name) => {
  const stackName = name;
  routes[stackName] = {
    name: stackName,
    screen: StackNavigator(flatRoutes, {
      initialRouteName: name,
      headerMode: 'screen',
      cardStyle: { backgroundColor: 'transparent' },
      navigationOptions: ({ navigation, screenProps }) => ({
        gesturesEnabled: false,
        header: (headerProps) => {
          return (<ThemedNavigationBar navigation={navigation} headerProps={headerProps} />);
        },
      }),
    }),
  };
  return routes;
}, {});

const AppNavigator = StackNavigator({
  LandingScreen: {
    screen: Screens.HomeContainer,
  },
  Home: {
    screen: DrawerNavigator({
      ...DrawerRoutes,
    }, {
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
    }),
  },
}, {
  headerMode: 'none',
});

export default AppNavigator;
