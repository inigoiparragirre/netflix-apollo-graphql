import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { RootNavigator} from '../navigators/RootNavigator';


const NavigationReducer = {
  nav: (state,action) => RootNavigator.router.getStateForAction(action,state)
};

export default NavigationReducer;
