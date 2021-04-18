import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './Home';
import { Tenfiftyfive } from './Tenfiftyfive';
import { Tenfiftyfivehalf } from './Tenfiftyfivehalf';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hive-management/1055dundas" component={Tenfiftyfive} />
            <Route path="/hive-management/1055dundasandhalf" component={Tenfiftyfivehalf} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;