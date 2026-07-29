import React from 'react';
import {StyleSheet} from 'react-native';
import {AppProvider} from './src/context/AppContext';
import RootNavigator from './src/navigation/RootNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ApolloProvider} from '@apollo/client/react';
import {client} from './src/graphql/client';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '932434840329-v3i1n2mq298fd5makt426ggprtnfs330.apps.googleusercontent.com',
  offlineAccess: true,
});

function App(): React.JSX.Element {
  return (
    <ApolloProvider client={client}>
      <GestureHandlerRootView style={styles.container}>
        <AppProvider>
          <RootNavigator />
        </AppProvider>
      </GestureHandlerRootView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
