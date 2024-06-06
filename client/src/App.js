import logo from './logo.svg';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import Header from './components/Header';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Rules from './pages/Rules'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Game from './pages/Game'


const httpLink = createHttpLink({
  uri: 'graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link:  authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Header/>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/rules"
          element={<Rules />}
        />
       <Route
          path="/game/:gameId"
          element={<Game />}
        />
        </Routes>
      </Router>
    </ApolloProvider>
)}

export default App;
