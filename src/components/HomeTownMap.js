import { default as React, Component } from "react";
import { default as update } from "react-addons-update";

import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";
import { triggerEvent } from "react-google-maps/lib/utils";

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class HomeTownMap extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: `300px`,
              width: `300px`
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => (this._googleMapComponent = map)}
            defaultZoom={12}
            defaultCenter={{ lat: 39.9711974, lng: -75.144421 }}
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
    );
  }
}
