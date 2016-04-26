import { default as React, Component } from "react";
import { default as Modal } from "react-modal";

export default class PoiManager extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      modalIsOpen: false
    }
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleSubmit(evt) {
    evt.preventDefault();

    var form = evt.target;

    var name = form.querySelector('#poiName').value;
    var description = form.querySelector('#description').value;
    var latitude = JSON.parse(form.querySelector('#latitude').value);
    var longitude = JSON.parse(form.querySelector('#longitude').value);

    this.props.onNewPoi({
      name,
      description,
      position: {
        lat: latitude,
        lng: longitude,
      },
      defaultAnimation: 2
    });
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
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal.bind(this)}
        style={modalStyles}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="poiName">Name</label>
          <input className="u-full-width" type="text" id="poiName" defaultValue="test marker"/>
          <label htmlFor="type">Type</label>
          <select className="u-full-width" id="poiType">
            <option value="shopping">Shopping</option>
            <option value="sights">Sights</option>
            <option value="grocery">Grocery</option>
          </select>
          <label htmlFor="description">Description</label>
          <textarea className="u-full-width" id="description"></textarea>
          <label htmlFor="latitude">Latitude</label>
          <input className="u-full-width" type="text" id="latitude" defaultValue="39.9711974"/>
          <label htmlFor="longitude">Longitude</label>
          <input className="u-full-width" type="text" id="longitude" defaultValue="-75.144421"/>
          <input className="button-primary" type="submit" value="Submit"/>
        </form>
      </Modal>
    )
  }
}
