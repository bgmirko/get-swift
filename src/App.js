import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import WeatherController from './containers/WeatherController';
import StartPage from './pages/StartPage';

const App = () => (
  <div className="App">
  <Switch>
    <Route path="/current-weather" exact component={WeatherController} />
    <Route to="/" exact component={StartPage}/>
    <Redirect to="/" />
  </Switch>
</div>
);

export default App;
