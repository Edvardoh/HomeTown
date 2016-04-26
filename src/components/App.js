import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPoi, removePoi, fetchPois } from '../actions/poiActions';
import HomeTownMap from './HomeTownMap';
import ControlPanel from './ControlPanel';

class App extends Component {
	constructor(props) {
		super(props);
	}

  componentWillMount() {
    this.props.dispatch(fetchPois());
  }

	handleClick() {
		this.props.dispatch(addPoi({name: "Test"}));
	}

  handleDelete(id) {
    this.props.dispatch(removePoi(id));
  }

  handleNewPoi(poi) {
    this.props.dispatch(addPoi(poi));
  }

  render() {
    const { pois, state } = this.props;

    return (
      <div>
        <HomeTownMap markers={pois} />
        <ControlPanel selected=""/>
      </div>
    );
  }
}

export default connect(state => ({ pois: state.pois, state: state }))(App);
