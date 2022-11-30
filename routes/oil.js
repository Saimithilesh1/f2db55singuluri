var express = require('express');
const oil_controllers= require('../controllers/oil');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

// GET request for one oil. 
router.get('/oil/:id', oil_controllers.oil_detail);

/* GET oil */
router.get('/', oil_controllers.oil_view_all_Page );
module.exports = router;


/* GET detail oil page */
router.get('/detail', oil_controllers.oil_view_one_Page);
router.get('/oil/:id', oil_controllers.oil_detail);
/* GET create oil page */
router.get('/create',secured, oil_controllers.oil_create_Page);
/* GET create update page */
router.get('/update',secured, oil_controllers.oil_update_Page);
/* GET delete oil page */ 
router.get('/delete', secured, oil_controllers.oil_delete_Page); 