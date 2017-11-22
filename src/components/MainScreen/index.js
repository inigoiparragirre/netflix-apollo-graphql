import React from 'react';
import { View, Text } from 'react-native';
import {
  StackRouter,
  DrawerNavigator,
  DrawerNavigationItem,
  StackNavigation,
  NavigationContext,
} from 'react-navigation';
import AppWithNavigationState from "../../navigators/RootNavigator";
import { Provider } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import Dashboard from '../Home';
import Search from '../Search';
import createStore from '../../reducers/createStore';
import EnhancedMovieDetails from "../../components/Details/MovieDetails";
import EnhancedPlayer from "../../components/Player";


const store = createStore;
// eslint-disable-next-line immutable/no-mutation
Dashboard.route = {
  navigationBar: {
    title: 'Netflix',
    backgroundColor: '#28292A',
    borderBottomWidth: 1,
    borderBottomColor: '#2B2C2D',
    titleStyle: {
      color: '#E7E8E9',
    },
    renderRight: () =>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}
      >
        <Icon name="magnifying-glass" size={25} color="white" />
      </View>,
  },
};


export default () =>
  <Provider store={store}>
  <View>
    <AppWithNavigationState />
    <EnhancedMovieDetails />
    </View>
    {/* <EnhancedMovieDetails />
    <EnhancedPlayer /> */}
  </Provider>;
