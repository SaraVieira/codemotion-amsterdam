import React from 'react'; // eslint-disable-line
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './components/home';
import About from './components/about';
import './style.css';

ReactDOM.render(
  <BrowserRouter>
    <div className="wrapper" style={{ height: '100%' }}>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </BrowserRouter>
, document.getElementById('app'));
if (module.hot) module.hot.accept();
