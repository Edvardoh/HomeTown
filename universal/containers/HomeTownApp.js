import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';
import ControlPanel from '../components/ControlPanel';
import PoiList from '../components/PoiList';
import PoiTicker from '../components/PoiTicker';
import AsyncBar from '../components/AsyncBar';
import PoiInput from '../components/PoiInput';
import HomeTownMap from '../components/HomeTownMap';

import * as HomeTownActions from '../actions/HomeTownActions';

class HomeTownApp extends Component {
  static propTypes = {
    addPoi: React.PropTypes.func.isRequired,
    editPoi: React.PropTypes.func.isRequired,
    deletePoi: React.PropTypes.func.isRequired,
    userId: React.PropTypes.string,
    pois: React.PropTypes.array,
    isWorking: React.PropTypes.bool,
    error: React.PropTypes.any,
  };

  render() {
    console.log(this.props);
    // For passing all actions to a child!
    let actions = { 
      addPoi: this.props.addPoi,
      editPoi: this.props.editPoi, 
      deletePoi: this.props.deletePoi
    };

    return (
      <div className="HomeTown-Container">
        <ControlPanel actions={actions} selected="" isWorking={this.props.isWorking || false} />
        <HomeTownMap markers={this.props.pois} onSubmit={this.props.addPoi} />
      </div>
    );
  }
}

/**
 * Expose "Smart" Component that is connect-ed to Redux
 */
export default connect(
  state => ({
    pois: state.homeTownApp.pois,
    userId: state.homeTownApp.userId,
    isWorking: state.homeTownApp.isWorking,
    error: state.homeTownApp.error
  }), 
  dispatch => bindActionCreators(HomeTownActions, dispatch)
)(HomeTownApp);


// return (
//       <div className="HomeTown-Container">
//         <Header/>
//         <ControlPanel actions={actions} />
//         <HomeTownMap markers={[]} onSubmit={this.props.addPoi} />
//         <section className='HomeTown-addPoiForm'>
//           <PoiInput onSubmit={this.props.addPoi} userId={this.props.userId} textLabel='What happened?' valueLabel='Rating' />
//         </section>
//         <AsyncBar isWorking={this.props.isWorking} error={this.props.error} />
//         {this.props.myPois}
//         {this.props.otherPois}
//       </div>
//     );
