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

    // const myPois = pois.filter(row => row.userId === userId );
    let list;
    let editable = true;

    if (pois.length > 0) {
      list = pois.map((poi, key) =>
        <PoiItem key={key} row={key} id={poi.id} editable={editable} poi={poi} {...actions} />
      );
    } else {
      list = <li>
        <div className='HomeTown-poiItem empty'>
          <p>No pois!</p>
        </div>
      </li>;
    }

    return (
      <section className='HomeTown-poiList'>
        <div className='HomeTown-poiList-summary'>
          <span>Your Pois</span>
          <span className='val'>{pois.length}</span>
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
