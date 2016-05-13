import React, {PropTypes, Component} from 'react';
import PoiItem from './PoiItem';

export default class PoiList extends Component {
  static propTypes = {
    pois: PropTypes.array.isRequired,
    userId: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { pois, userId, actions } = this.props;

    const myPois = pois.filter(row => row.userId === userId );
    let list;
    let editable = true;

    let cumulative = myPois.reduce((x, poi) =>  poi.value + x, 0);
    let average = (myPois.length > 0) ? Math.round(cumulative/myPois.length): 0;

    

    if (myPois.length > 0) {
      list = myPois.map((poi, key) =>
        <PoiItem key={key} row={key} id={poi.id} editable={editable} poi={poi} {...actions} />
      );
    } else {
      list = <li>
        <div className='HomeTown-poiItem empty'>
          <p>No pois recorded!</p>
        </div>
      </li>;
    }

    return (
      <section className='HomeTown-poiList'>
        <div className='HomeTown-poiList-summary'>
          <span>Your Pois</span>
          <span className='val'>{myPois.length}</span>
          <span>Avg.</span>
          <span className='val'>{average}</span>
          <span>Cum.</span>
          <span className='val'>{cumulative}</span>
        </div>

        <div className='HomeTown-poiList-list'>
          <ul>
            {list}
          </ul>
        </div>
      </section>
    );
  }
}
