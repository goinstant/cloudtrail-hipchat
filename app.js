var express = require('express');
var app = express();
var SNSClient = require('aws-snsclient');

var auth = {
  region: 'us-east-1'
};
var client = SNSClient(auth, function(err, message) {
      console.log(message);
});

app.post('/receive', client);

app.listen(process.env.PORT || 9000);
