import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BrowsePage } from './pages/BrowsePage';
import { AnalyzePage } from './pages/AnalyzePage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/browse" component={BrowsePage} />
          <Route exact path="/analyze" component={AnalyzePage} />
        </>
      </Router>
    );
  }
}

export default App;
