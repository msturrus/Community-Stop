var express = require('express');
var router = express.Router();
var request = require('superagent')
var xml2js  = require()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET /busses/
// ------------
// Get data from bus tracker website
// Call this route from your main JS file
// on the front end. It'll be an AJAX call.
app.get('/busses/?', function(req, res, next) {
  // Use the `request` object (Superagent: https://github.com/visionmedia/superagent)
  // to make an API call to CTA to get the data you want
  request
    .get('/cta/api/CHANGE_THIS/TO/WHATEVER/')
    .end(function(err, response) {
      // you get the CTA response in here
      // Now parse it into JSON from XML
      if (err) {
        res.json({status: 'error', message: err});
      } else {
        xml2js(response.body, function(error, result) {
          if (error) {
            console.log(error); // there are better ways to handle errors but whatever
          } else {
            res.json(result);
          }
        })
      }
    })
})

module.exports = router;
