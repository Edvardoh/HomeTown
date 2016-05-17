import socketClient from 'socket.io-client';

export function setupRealtime(store, actions) {
  const io = socketClient();

  io.on('poi-change', (change) => {
    let state = store.getState();
    if (!change.old_val) {
      store.dispatch(actions.addPoiSuccess(change.new_val));
    } else if (!change.new_val) {
      store.dispatch(actions.deletePoiSuccess(change.old_val));
    } else {
      store.dispatch(actions.editPoiSuccess(change.new_val));
    }
  });

  return io;
}
