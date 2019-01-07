var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('setting/index', { title: 'SETTING' });
});

router.get('/timer', function(req, res, next) {
    res.render('setting/timer', {title: 'TIMER' });
});

module.exports = router;