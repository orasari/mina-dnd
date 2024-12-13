import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Set up Apollo Client with a mock endpoint (assuming you want to use a mock server or local files)
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000', // Assuming you're using a local mock GraphQL server
  }),
  cache: new InMemoryCache(),
});

export default client;
