var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('oil', { title: 'search results for Oil class' });

});
module.exports = router;