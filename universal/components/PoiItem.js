import React, {PropTypes, Component} from 'react';
import moment from 'moment';
import PoiInput from './PoiInput';

export default class PoiItem extends Component {
  static propTypes = {
    id: PropTypes.any.isRequired,
    row: PropTypes.number.isRequired,
    poi: PropTypes.object.isRequired,
    editable: PropTypes.bool,
    editPoi: PropTypes.func,
    deletePoi: PropTypes.func
  };

  constructor(props, context){
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleClick() {
    // if (this.props.editable) {
    //   this.setState({ editing: true });
    // }
  }

  handleSave(poi) {
    if (poi.text.length === 0) {
      this.props.deletePoi(poi);
    } else {
      this.props.editPoi(poi);
    }
    this.setState({ editing: false });
  }

  render() {
    const { row, id, poi, editPoi, deletePoi } = this.props;

    let element, className = (row % 2 === 0) ? 'even' : 'odd';
    let modified = (poi.updated) ? poi.updated : poi.created;

    if (this.state.editing) {
      element = (
        <PoiInput text={poi.text} 
                    value={poi.value}
                    userId={poi.userId} 
                    editing={this.state.editing}
                    valueLabel='Rating'
                    onSubmit={ (poi) => this.handleSave(Object.assign({}, poi, { id: id })) } />
      );
    } else {
      let del = (this.props.editable) ? 
        <button className='destroy pure-button' onClick={ () => deletePoi(poi) } /> :
        null;
      element = (
        <div className='HomeTown-poiItem'>
          <p className='rowNumber'>{row+1}.</p>
          <p className='title' onClick={::this.handleClick}>
            {poi.name}            
          </p>
          <p>{poi.position.lat}</p>
          <p>{poi.position.lng}</p>
          {del}
          <p className='created'>{moment(modified).fromNow()}</p>
        </div>
      );
    }

    return (
      <li className={className}>{element}</li>
    );
  }
}
