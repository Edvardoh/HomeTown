import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PoiTicker from '../components/PoiTicker';

import * as HomeTownActions from '../actions/HomeTownActions';

class OtherPois extends Component {
  static propTypes = {
    userId: React.PropTypes.string,
    pois: React.PropTypes.array
  };

  render() {
    return (
      <PoiTicker pois={this.props.pois} userId={this.props.userId} length={3} />
    );
  }
}

/**
 * Expose "Smart" Component that is connect-ed to Redux
 */
export default connect(
  state => ({
    pois: state.homeTownApp.pois,
    userId: state.homeTownApp.userId
  }), 
  dispatch => bindActionCreators(HomeTownActions, dispatch)
)(OtherPois);
