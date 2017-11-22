import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from "./src/components/MainScreen";
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache()
});


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Text style={styles.baseText}>Kaixo Netflix aplikazio berrira!</Text>
          <Text style={styles.secondaryText}>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <MainScreen />
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#13f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontSize: 30,
    color: 'yellow'
  },
  secondaryText: {
    fontSize: 15,
    color: 'grey'
  }
});
