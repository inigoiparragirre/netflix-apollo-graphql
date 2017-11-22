import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

import Dashboard from "../components/Home";
import CategoryScreen from "../category";
import Search from "../components/Search";


export const RootNavigator = TabNavigator({
  Dashboard: { 
    screen: Dashboard ,
    navigationOptions: {
      tabBarLabel: 'Home',
    },
  },
  CategoryScreen: { 
    screen: CategoryScreen,
    navigationOptions: {
      tabBarLabel: 'Category',
    },
  },
  Search: { 
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
    }
  }
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});


const AppWithNavigationState = ({ dispatch, nav }) => (
  <RootNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);