var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var oil_controller = require('../controllers/oil');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// oil ROUTES ///
// POST request for creating a oil.  
router.post('/oils', oil_controller.oil_create_post);
// DELETE request to delete oil.
router.delete('/oils/:id', oil_controller.oil_delete);
// PUT request to update oil.
router.put('/oils/:id', oil_controller.oil_update_put);
// GET request for one oil.
router.get('/oils/:id', oil_controller.oil_detail);
// GET request for list of all oil items.
router.get('/oils', oil_controller.oil_list);
module.exports = router;

// GET request for one oil.
router.get('/oil/:id', oil_controller.oil_detail);