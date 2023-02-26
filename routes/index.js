const texto='Aaa'

const messages=[
  {
    text:"fuck off you bitch",
    user:"Me",
    date: new Date()
  },
  {
    text:"fuck off you bitch",
    user:"Me",
    date: new Date()
  }
];

var express = require('express');
var router = express.Router();
const ejs = require('ejs');



/* GET home page. */
router.get('/', function(req, res, next) {    
  res.render('index',{messages: messages});
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req,res,next){
messages.push({
  text:req.body.text,
  user:req.body.user,
  date:new Date()
});
res.redirect('/');
});




module.exports = router;
