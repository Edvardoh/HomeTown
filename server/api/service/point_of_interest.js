import r from 'rethinkdb';
import config from 'config';
import xss from 'xss';

function connect() {
  return r.connect(config.get('rethinkdb'));
}

export function liveUpdates(io) {
  console.log('Setting up listener...');
  connect()
  .then(conn => {
    r
    .table('points_of_interest')
    .changes().run(conn, (err, cursor) => {
      console.log('Listening for changes...');
      cursor.each((err, change) => {
        console.log('Change detected', change);
        io.emit('poi-change', change);
      });
    });
  });
}

export function getPois() {
  return connect()
  .then(conn => {
    return r
    .table('points_of_interest')
    .orderBy(r.desc('created')).run(conn)
    .then(cursor => cursor.toArray());
  });
}

export function addPoi(poi) {
  return connect()
  .then(conn => {
    poi.created = new Date();
    poi.name = xss(poi.name);
    poi.description = xss(poi.description);
    poi.category = xss(poi.category);
    return r
    .table('points_of_interest')
    .insert(poi).run(conn)
    .then(response => {
      return Object.assign({}, poi, {id: response.generated_keys[0]});
    });
  });
}

export function editPoi(id, poi) {
  poi.updated = new Date();
  poi.name = xss(poi.name);
  poi.name = xss(poi.name);
  poi.description = xss(poi.description);
  poi.category = xss(poi.category);
  return connect()
  .then(conn => {
    return r
    .table('points_of_interest')
    .get(id).update(poi).run(conn)
    .then(() => poi);
  });
}

export function deletePoi(id) {
  return connect()
  .then(conn => {
    return r
    .table('points_of_interest')
    .get(id).delete().run(conn)
    .then(() => ({id: id, deleted: true}));
  });
}
