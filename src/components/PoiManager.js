import { default as React, Component } from "react";
import { connect } from 'react-redux';
import { default as Modal } from "react-modal";
import { addPoi } from '../actions/poiActions';

class PoiManager extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleSubmit(evt) {
    evt.preventDefault();

    var form = evt.target,
        data = {
          name: form.querySelector('#poiName').value,
          category: form.querySelector('#poiType').value,
          description: form.querySelector('#description').value,
          images: [],
          position: {
            lat: JSON.parse(form.querySelector('#latitude').value),
            lng: JSON.parse(form.querySelector('#longitude').value)
          }
        };

    this.props.dispatch(addPoi(data));
    this.props.closeModal('poiManager');
  }

  render() {
  const modalStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

    return (
      <Modal
        isOpen={this.props.poiManager}
        onRequestClose={this.props.closeModal.bind(this, 'poiManager')}
        style={modalStyles}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h4>New Point of Interest</h4>
          <fieldset className="form-group">
            <label htmlFor="poiName">Name</label>
            <input className="form-control" type="text" id="poiName"/>
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="type">Type</label>
            <select className="form-control" id="poiType">
              <option value="shopping">Shopping</option>
              <option value="sights">Sights</option>
              <option value="grocery">Grocery</option>
            </select>
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" id="description"></textarea>
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="latitude">Latitude</label>
            <input className="form-control" type="text" id="latitude" defaultValue="39.9711974"/>
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="longitude">Longitude</label>
            <input className="form-control" type="text" id="longitude" defaultValue="-75.144421"/>
          </fieldset>
          <button className="btn btn-primary" type="submit">Add</button>
        </form>
      </Modal>
    )
  }
}

export default connect()(PoiManager);