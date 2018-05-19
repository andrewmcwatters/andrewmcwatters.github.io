import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './routes/Home';
import { Route } from "react-router-dom";
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Route exact path="/" component={Home} />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
