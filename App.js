import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import GroupScreen from './src/screens/GroupScreen';

import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AuthScreen from './src/screens/AuthScreen';
import QRScreen from './src/screens/QRScreen';

const store = configureStore()


const navigator = createStackNavigator ({
  Search: SearchScreen,
  Group: GroupScreen,
  Auth: AuthScreen,
  QR: QRScreen,
}, {
  initialRouteName: 'QR',
  headerMode: 'none' ,
  // defaultNavigationOptions: {
  //   title: "Login"
  // }
});

const AppContainer = createAppContainer(navigator);

const App = () => {
    return (
        <Provider store={store}>
          <AppContainer/>
        </Provider>
    )
}

export default App;