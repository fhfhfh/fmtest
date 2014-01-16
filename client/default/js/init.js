/*
JSON is automatically included with each app.

Use the $fh.ready() (http://docs.feedhenry.com/wiki/Ready) function to trigger 
loading the local config and binding a click event to invoke the cloud action 
call which will return the remote config.
*/

$fh.ready(function() {
  // The local config variable from config.js can be accessed directly
  // document.getElementById('localConfig').innerHTML = "<p>" + JSON.stringify(config) + "</p>";

  // document.getElementById('run_button').onclick = function() {
  //   // Invoke a cloud action call to get the remote configuration
  //   // See: http://docs.feedhenry.com/wiki/Actions
  //   $fh.act(
  //     {
  //       act:'getConfig'
  //     },
  //     function(res) {
  //       document.getElementById('cloudConfig').innerHTML = "<p>" + JSON.stringify(res.config) + "</p>";
  //     },
  //     function(code,errorprops,params) {
  //       alert('An error occured: ' + code + ' : ' + errorprops);
  //     }
  //   );
  // };


  document.getElementById('run_button').onclick = function() {
    // Invoke a cloud action call to get the remote configuration
    // See: http://docs.feedhenry.com/wiki/Actions
    $fh.act({
          "act": "authenticateUsername",
          "req": {
            "clientID": "SightRisk",
            "uuid": "86ac269232056154bcb8c76e030a49d4",
            "deviceName": "iPhone",
            "appName": "EyeQuity",
            "appVersion": ".1",
            "osVersion": "6.0"
          },
          "timeout": 25000
        }, function(res) {
            // Cloud call was successful. save this information now
            console.log("back",res)
            document.getElementById('localConfig').innerHTML = 
                "<p>"  + JSON.stringify(res.status) + "</p>" +
                "<p>"  + JSON.stringify(res.headers) + "</p>" +
                "<p>"  + JSON.stringify(res.response) + "</p>" ;       

        }, function(msg, err) {
          // An error occured during the cloud call. Alert some debugging information
          console.log('Cloud call failed with error:' + msg + '. Error properties:' + JSON.stringify(err));
        });
  };




});