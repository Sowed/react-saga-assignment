import React from 'react';
import {Provider} from 'react-redux';
import RouteProvider from './providers/RouteProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RouteProvider />
      </SafeAreaProvider>
    </Provider>
  );
}
