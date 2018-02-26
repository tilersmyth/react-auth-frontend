import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, concat } from 'apollo-link';

import 'antd/dist/antd.css';

import Routes from './routes';

const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext({
      headers: {
        'x-token': localStorage.getItem('token') || null,
        'x-refresh-token': localStorage.getItem('refreshToken') || null,
      } 
    });
  
    return forward(operation);
  })
  
  const client = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache()
  });

const App = () => (
    <ApolloProvider client={client}>
        <Routes /> 
    </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
