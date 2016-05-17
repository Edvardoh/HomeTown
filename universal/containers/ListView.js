import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PoiList from '../components/PoiList';

import * as HomeTownActions from '../actions/HomeTownActions';

class ListView extends Component {
  static propTypes = {
    editPoi: React.PropTypes.func.isRequired,
    deletePoi: React.PropTypes.func.isRequired,
    userId: React.PropTypes.string,
    pois: React.PropTypes.array
  };

  render() {
    let actions = { 
      editPoi: this.props.editPoi, 
      deletePoi: this.props.deletePoi
    };

    return (
      <PoiList pois={this.props.pois} userId={this.props.userId} actions={actions} />
    );
  }
}

export default connect(
  state => ({
    pois: state.homeTownApp.pois,
    userId: state.homeTownApp.userId
  }), 
  dispatch => bindActionCreators(HomeTownActions, dispatch)
)(ListView);
