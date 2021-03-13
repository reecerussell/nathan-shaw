import React, { Suspense, FunctionComponentElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import './scss/styles.scss';

interface Props {}

const App = (): FunctionComponentElement<Props> => (
  <Router>
    <Switch>
      <Suspense fallback={<p>Loading...</p>}>
        {routes.map((route, key) => (
          <Route key={key} {...route} />
        ))}
      </Suspense>
    </Switch>
  </Router>
);

export default App;
