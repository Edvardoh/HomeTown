import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomeTownApp from './containers/HomeTownApp';
import GoogleMapView from './containers/GoogleMapView';

import ListView from './containers/ListView';

export default (
  <Route path='/' component={HomeTownApp}>
    <IndexRoute components={{googleMapView: GoogleMapView, listView: ListView}} />
    <Route path='map' components={{googleMapView: GoogleMapView}} />
    <Route path='list' components={{listView: ListView}} />
  </Route>
);
