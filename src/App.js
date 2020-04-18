import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Switch } from "react-router-dom";
import Footer from './components/Footer';

const Home = lazy(() => import('./routes/Home'));
const NoMatch = lazy(() => import('./routes/NoMatch'));

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Suspense fallback={<main>
          <div>Loading...</div>
        </main>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </Suspense>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
