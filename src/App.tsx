import React, { ReactElement } from 'react';
import 'typeface-roboto';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './screens/Home';
import NotFound from './screens/NotFound';

const App: React.FC = (): ReactElement => {
  return (
    <React.Fragment>
      <CssBaseline>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </CssBaseline>
    </React.Fragment>
  );
};

export default App;
