import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Application } from './Application';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/hive-management" component={Home} />
            <Route path="/application" component={Application} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;