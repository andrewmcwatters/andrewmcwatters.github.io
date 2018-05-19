import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './routes/Home';
import NoMatch from './routes/NoMatch';
import { Route, Switch } from "react-router-dom";
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
