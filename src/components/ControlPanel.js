import React, { Component } from 'react';

export default class ControlPanel extends Component {

  constructor(props, context) {
    super(props, context);
  }

  selectControl(control) {
    if(this.state && this.state.selected == control) {
      this.setState({selected: ''});
      return;
    }

    this.setState({selected: control});
  }

  isActive(control) {
    //TODO refactor this.. this.state was undefined when first rendering so I did this
    var selected = this.state ? this.state.selected : this.props.selected;

    return 'control-details ' + control + ' ' + ((control === selected) ? 'active' : 'default');
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
    );
  }
}
