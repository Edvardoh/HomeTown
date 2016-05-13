import React, {PropTypes, Component} from 'react';
import PoiItem from './PoiItem';

export default class PoiTicker extends Component {
  static propTypes = {
    pois: PropTypes.array.isRequired,
    length: PropTypes.number.isRequired
  };

  render() {
    const { pois, userId, actions } = this.props;

    const otherPois = pois.filter(row => row.userId !== userId );

    let cumulative = otherPois.reduce((x, poi) =>  poi.value + x, 0);
    let average = (otherPois.length > 0) ? Math.round(cumulative/otherPois.length) : 0;
    let editable = false;

    return (
      <section className='HomeTown-poiList'>
        <div className='HomeTown-poiList-summary'>
          <span>Other Pois</span>
          <span className='val'>{otherPois.length}</span>
          <span>Avg.</span>
          <span className='val'>{average}</span>
          <span>Cum.</span>
          <span className='val'>{cumulative}</span>
        </div>
        <div className='HomeTown-poiList-list'>
          <ul>
            {otherPois.slice(0,this.props.length).map((poi, key) =>
              <PoiItem key={key} row={key} id={poi.id} poi={poi} editable={editable} />
            )}
          </ul>
        </div>
      </section>
    );
  }
}
