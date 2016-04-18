import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPoi, removePoi } from '../actions/poiActions';
import GettingStarted from './GettingStarted';
import PointOfInterestForm from './PointOfInterestForm';

class App extends Component {
	constructor(props) {
		super(props);
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
        <PointOfInterestForm onNewPoi={this.handleNewPoi.bind(this)} />
      	<button onClick={this.handleClick.bind(this)}>Add POI</button>
        <ul>
          { pois.map(poi => <li key={poi.id} onClick={this.handleDelete.bind(this, poi.id)}> {poi.id} {poi.name} </li> ) }
        </ul>
        <pre>
          redux state = { JSON.stringify(state, null, 2)}
        </pre>
      </div>
    );
  }
}

export default connect(state => ({ pois: state.pois, state: state }))(App);
