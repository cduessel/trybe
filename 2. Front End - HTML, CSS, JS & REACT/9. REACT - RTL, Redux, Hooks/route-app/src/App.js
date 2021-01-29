import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import user from './user';
import StrictAccess from './StrictAccess';

import {BrowserRouter, Switch, Link, Route} from 'react-router-dom' 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/strict-access">StrictAccess</Link>
      </nav>
      <main>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/users" render={
            (props) => <Users {...props} greetingMessage="Olá" />
          }/>
          <Route path="/strict-access" render={
            (props) => <StrictAccess {...props} user={ {username:"CD", password:"1234"} } />
          }/>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={user} />
        </Switch>
      </main>
      <footer>
        <h3>made with love</h3>
      </footer>
      </BrowserRouter>
    );
  }
}

export default App;