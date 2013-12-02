/*
JSON is automatically included with each app.

Use the $fh.ready() (http://docs.feedhenry.com/wiki/Ready) function to trigger 
loading the local config and binding a click event to invoke the cloud action 
call which will return the remote config.
*/

$fh.ready(function() {
  // The local config variable from config.js can be accessed directly
  console.log("start js");
  $("#hidden").click(function(){
    $('#main').css('overflow','hidden');
  });

  $("#auto").click(function(){
    $('#main').css('overflow','auto');
  });

});