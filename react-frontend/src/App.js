import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateReviewComponent from './components/CreateReviewComponent';
import React from 'react';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div>
          <Switch>
            <Route path="/" exact component={HomeComponent}></Route>
            <Route path="/create-review" component={CreateReviewComponent}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
