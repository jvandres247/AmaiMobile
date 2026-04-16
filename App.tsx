import React from 'react';
import {StyleSheet} from 'react-native';
import {AppProvider} from './src/context/AppContext';
import RootNavigator from './src/navigation/RootNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ApolloProvider} from '@apollo/client/react';
import {client} from './src/graphql/client';

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
