import React from 'react';
import { Switch } from 'react-router-dom';
import CustomRoute from './CustomRoute';

import Main from '../pages/Main';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/" component={Main} isClosed={false} />
      <CustomRoute path="*" component={Page404} isClosed={false} />
    </Switch>
  );
}
