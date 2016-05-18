import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import { default as canUseDOM } from "can-use-dom";
import { triggerEvent } from "react-google-maps/lib/utils";
import { default as _ } from "lodash";
import { bindActionCreators } from 'redux';
import * as HomeTownActions from '../actions/HomeTownActions';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

class GoogleMapView extends Component {
   constructor(props, context) {
    super(props, context);
    this.handleWindowResize = _.throttle(::this.handleWindowResize, 500);
  }

  componentDidMount() {
    if (!canUseDOM) {
      return;
    }
    window.addEventListener(`resize`, this.handleWindowResize);
  }

  componentWillUnmount() {
    if (!canUseDOM) {
      return;
    }
    window.removeEventListener(`resize`, this.handleWindowResize);
  }

  handleWindowResize() {
    console.log(`handleWindowResize`, this._googleMapComponent);
    triggerEvent(this._googleMapComponent, `resize`);
  }

  handleClick() {
    console.log('map clicked');
  }

  handleMarkerClick(marker) {
    console.log(marker);
  }

  render() {
    return (
      <div className="map-container">
        <GoogleMapLoader
          containerElement={
            <div
              style={{
                height: "100%",
                width: "100%"
              }}
            />
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => (this._googleMapComponent = map)}
              defaultZoom={12}
              defaultCenter={{ lat: 39.9711974, lng: -75.144421 }}
              onClick={::this.handleClick}
            >
              {this.props.pois.map((marker, index) => {
                return (
                  <Marker key={index} onClick={this.handleMarkerClick.bind(this, marker)}
                    {...marker}
                  />
                );
              })}
            </GoogleMap>
          }
        />
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
    userId: state.homeTownApp.userId
  }), 
  dispatch => bindActionCreators(HomeTownActions, dispatch)
)(GoogleMapView);
