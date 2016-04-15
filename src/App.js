import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPoi } from './actions';
import GettingStarted from './GettingStarted';

class App extends Component {
	constructor(props) {
		super(props);
	}

	handleClick() {
		this.props.dispatch(addPoi({name: "Test"}));
	}

  render() {
    const { state } = this.props;
    return (
      <div>
      	<button onClick={this.handleClick.bind(this)}>Add POI</button>
        <GettingStarted/>
        <pre>
          redux state = { JSON.stringify(state, null, 2)}
        </pre>
      </div>
    );
  }
}

export default connect(state => ({ pois: state.pois, state: state }))(App);