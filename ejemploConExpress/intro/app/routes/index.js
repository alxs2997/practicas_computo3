var express = require('express');
var router = express.Router();

//rutas

const registerRoute = "../views/register";
const loginRoute = "../views/login";

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Programación computacional IV' });
});

router.get("/register",(req, res) =>{
  res.render(registerRoute);
});

router.get("/login",(req, res) =>{
  res.render(loginRoute);
});

router.post('/register',()=>{

});

module.exports = router;
