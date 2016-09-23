var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 9999;
//accessing port from the environment variable
//uppercase is a must for const keyword

app.use(function(req,res,next){
  if(req.headers['x-forwarded-proto'] === 'http'){
    next();
  } else {
    console.log("The request header is != http");
    res.redirect('http://'+req.hostname+req.url);
  }
});

app.use(express.static('public'));

app.listen(port, function () {
  console.log('Express server is up on port '+port);
});
