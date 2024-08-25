import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
