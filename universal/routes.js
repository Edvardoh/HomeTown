import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomeTownApp from './containers/HomeTownApp';
import MyPois from './containers/MyPois';

import OtherPois from './containers/OtherPois';

export default (
  <Route path='/' component={HomeTownApp}>
    <IndexRoute components={{myPois: MyPois, otherPois: OtherPois}} />
    <Route path='my-pois' components={{myPois: MyPois}} />
    <Route path='other-pois' components={{otherPois: OtherPois}} />
  </Route>
);
