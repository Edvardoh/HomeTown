import React, { Component } from 'react';
import PoiManager from './PoiManager';

export default class ControlPanel extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      selected: ''
    }
  }

  selectControl(control) {
    //deselect control if it has already been selected
    if(this.state && this.state.selected == control) {
      this.setState({selected: ''});
      return;
    }

    this.setState({selected: control});
  }

  isActive(control) {
    return 'control-details ' + control + ' ' + ((control === this.state.selected) ? 'active' : 'default');
  }

  render() {
    return (
      <div className="control-panel">
        <table>
          <tbody>
            <tr>
              <td className="parent-cell">
                <i className="fa fa-map-marker icon parent-marker"></i>
              </td>
              <td className="parent-cell">
                <div className="grey icon marker-circle parent-marker"></div>
              </td>
              <td className="parent-cell">
                <i className="fa fa-hand-o-right icon parent-marker"></i>
              </td>
              <td onClick={this.selectControl.bind(this, 'settings')} className="parent-cell">
                <i className="fa fa-bars icon settings"></i>
              </td>
              <td className="parent-cell">
                <span className="more-text">more...</span>
              </td>
            </tr>
          </tbody>
        </table>
        
        <table className={this.isActive('settings')}>
          <tbody>
            <tr>
              <td className="first">
                <i className="fa fa-map-marker icon"></i>
              </td>
              <td className="last">
                Add Point of Interest
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <PoiManager modalIsOpen={true}/>
    );
  }
}
