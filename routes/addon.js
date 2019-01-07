var express = require('express');
var router = express.Router();
var cluster = require('cluster');

var addon = require('bindings')('addon');

/* GET users listing. */
router.get('/', function (req, res, next) {
    
});

router.use('/hello', function (req, res, next) {
    addon(function(msg){
        console.log(msg);
    }); // 'hello world'
    res.redirect('back');
    
});

module.exports = router;

