import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/style.scss';
import Header from './components/Header';
import Main from './components/Main';
import Info from './components/Info';
import About from './components/About';
import Pricing from './components/Pricing';
import Company from './components/Company';
import Documentation from './components/Documentation';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import client from './config/keen-tracking';

client.recordEvent('pageviews', {});

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Route path="/" component={Main} exact />
      <Route path="/info" component={Info} />
      <Route path="/about" component={About} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/company" component={Company} />
      <Route path="/documentation" component={Documentation} />
      <Route path="/contact" component={Contact} />
      <Route path="/dashboard" component={Dashboard} />
    </React.Fragment>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('app'));
