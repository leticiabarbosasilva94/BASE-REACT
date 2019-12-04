import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Test from '../pages/Test';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/test" component={Test} />
    </Switch>
  );
}
