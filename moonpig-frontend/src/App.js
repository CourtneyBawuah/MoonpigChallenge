// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardList from './components/CardList';
import CardDetails from './components/CardDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CardList} />
        <Route path="/card/:productNo" component={CardDetails} />
      </Switch>
    </Router>
  );
}

export default App;

