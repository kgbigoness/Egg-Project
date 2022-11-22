import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import HeaderComponent from './components/HeaderComponent';
import React from 'react';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div>
          <Switch>
            <Route path="/" exact component={HomeComponent}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
