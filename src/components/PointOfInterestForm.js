import React, { Component } from 'react';

export default class PointOfInterestForm extends Component {
  handleSubmit(evt) {
    evt.preventDefault();

    var form = evt.target;

    var name = form.querySelector('#poiName').value;
    var description = form.querySelector('#description').value;
    var latitude = form.querySelector('#latitude').value;
    var longitude = form.querySelector('#longitude').value;

    this.props.onNewPoi({
      name,
      description,
      latitude,
      longitude
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="poiName">Name</label>
        <input className="u-full-width" type="text" id="poiName"/>
        <label htmlFor="type">Type</label>
        <select className="u-full-width" id="poiType">
          <option value="shopping">Shopping</option>
          <option value="sights">Sights</option>
          <option value="grocery">Grocery</option>
        </select>
        <label htmlFor="description">Description</label>
        <textarea className="u-full-width" id="description"></textarea>
        <label htmlFor="latitude">Latitude</label>
        <input className="u-full-width" type="text" id="latitude"/>
        <label htmlFor="longitude">Longitude</label>
        <input className="u-full-width" type="text" id="longitude"/>
        <input className="button-primary" type="submit" value="Submit"/>
      </form>
    )
  }
}
