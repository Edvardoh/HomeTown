import React, {PropTypes, Component} from 'react';
import moment from 'moment';
import PoiInput from './PoiInput';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

export default class HomeTownMap extends Component {
  constructor(props, context){
    super(props, context);
  }

  handleClick() {
    console.log('map clicked');
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
              {this.props.markers.map((marker, index) => {
                return (
                  <Marker key={index}
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
