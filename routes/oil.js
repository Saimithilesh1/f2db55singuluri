var express = require('express');
const oil_controllers= require('../controllers/oil');
var router = express.Router();

// GET request for one oil. 
router.get('/oil/:id', oil_controllers.oil_detail);

/* GET oil */
router.get('/', oil_controllers.oil_view_all_Page );
module.exports = router;


/* GET detail oil page */
router.get('/detail', oil_controllers.oil_view_one_Page);
router.get('/oil/:id', oil_controllers.oil_detail);
/* GET create oil page */
router.get('/create', oil_controllers.oil_create_Page);
/* GET create update page */
router.get('/update', oil_controllers.oil_update_Page);
/* GET delete costume page */ 
router.get('/delete', oil_controllers.oil_delete_Page); 