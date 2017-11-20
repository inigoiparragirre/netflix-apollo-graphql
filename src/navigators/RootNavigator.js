import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, DrawerNavigator } from 'react-navigation';

import Dashboard from "../components/Home";
import CategoryScreen from "../category";
import Search from "../components/Search";


export const RootNavigator = DrawerNavigator({
  Dashboard: { screen: Dashboard },
  CategoryScreen: { screen: CategoryScreen},
  Search: { screen: Search}
},
{initialRouteName: 'Dashboard'}
);

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