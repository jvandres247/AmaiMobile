import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

import {useAuthStore} from '../store/authStore';

const authLink = new ApolloLink((operation, forward) => {
  const tokens = useAuthStore.getState().tokens;

  operation.setContext(({headers = {}}) => ({
    headers: {
      ...headers,
      authorization: tokens ? `Bearer ${tokens.accessToken}` : '',
    },
  }));

  return forward(operation);
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
