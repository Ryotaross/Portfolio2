import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './pages/profile';
import Product from './pages/product';
import Social from './pages/social';
import History from './pages/history';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Profile />
        </Route>
        <Route exact path='/product'>
          <Product />
        </Route>
        <Route exact path='/social'>
          <Social />
        </Route>
        <Route exact path='/history'>
          <History />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
