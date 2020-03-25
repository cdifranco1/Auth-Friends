import React from 'react';
import { Route } from 'react-router-dom';
import { LoginForm } from './components/LoginForm'
import { PrivateRoute } from './PrivateRoute'
import { FriendsList } from './components/FriendsList'
import { Nav } from './components/Nav'
import './App.css';

function App() {
  return (
    <>
      <Nav/>
      <Route exact path="/">
        <LoginForm/>
      </Route>
      <PrivateRoute path="/friends" component={FriendsList}/>
    </>
  );
}

export default App;
