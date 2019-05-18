import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import WeatherController from './containers/WeatherController';

const App = () => (
  <div className="App">
  <Switch>
    <Route path="/" exact component={WeatherController} />
    <Redirect to="/" />
  </Switch>
</div>
);

export default App;
