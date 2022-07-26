import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import { Provider } from 'react-redux';
import Store from './store/app';

const Graphqlclient = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ApolloProvider client={Graphqlclient}>
    <Provider>
      <App />
    </Provider>
  </ApolloProvider>
);
