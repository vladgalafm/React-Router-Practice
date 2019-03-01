import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Contacts from './components/Contacts/Contacts';
import Users from './components/Users/Users';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Navigation from './components/Navigation/Navigation';
import './styles/reset.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} component={Home} exact />
            <Route path={process.env.PUBLIC_URL + '/contacts'} component={Contacts} />
            <Route path={process.env.PUBLIC_URL + '/users'} component={Users} />
            <Route path={process.env.PUBLIC_URL + '/404'} component={PageNotFound} />
            <Redirect to={process.env.PUBLIC_URL + '/404'} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
