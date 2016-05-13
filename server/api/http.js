import * as service from './service/point_of_interest';

export function getPois(req, res) {
  service.getPois()
  .then((pois) => res.json(pois))
  .catch(err => {
    res.status(400);
    res.json({error: err});
  });
}

export function addPoi(req, res) {
  service.addPoi(req.body)
  .then((poi) => res.json(poi))
  .catch(err => {
    res.status(400);
    res.json({error: err, poi: req.body});
  });
}

export function editPoi(req, res) {
  service.editPoi(req.params.id, req.body)
  .then((poi) => res.json(poi))
  .catch(err => {
    res.status(400);
    res.json({error: err, poi: req.body});
  });
}

export function deletePoi(req, res) {
  service.deletePoi(req.params.id)
  .then((poi) => res.json(poi))
  .catch(err => {
    res.status(400);
    res.json({error: err, poi: req.body});
  });
}

