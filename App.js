

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Navigation from './app/navigation/Navigation';
import { Provider  } from 'react-redux'
import store from './app/reducers/FollowerReducer';
function App ()  {
  return (
    <Provider store={store}>
   <Navigation/>
    </Provider>
  )
}



export default App;
