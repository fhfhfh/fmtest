var util = require('util');
var request = require('request');
/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
*/

/* 'getConfig' server side REST API method.
 * Trivial example of pulling in a shared config file.
 */
exports.getConfig = function(params, callback) {
  console.log("In getConfig() call");
  

  // return callback(null, {config: cfg.config});
  return callback(null, {config: "wtfffff"});
};

exports.authenticateUsername = function(params, callback) {

	console.log("lets go");

	request({
		url: "http://www.eyequity-app.com/index.php/api/authenticate_username", 
		headers:{'content-type':'application/x-www-form-urlencoded'},
		body: 'username=ecrvault&password=comsquar3d',
		method: "POST"
	}, function (err, response, body) {
		console.log("Status", response.statusCode);
		console.log("Headers", JSON.stringify(response.headers));
		console.log("Response received", body);
		// console.log(response);
		var user = JSON.parse(body);
		return callback(null, {"status":response.statusCode,"headers":JSON.stringify(response.headers),"response":body});
	});

};