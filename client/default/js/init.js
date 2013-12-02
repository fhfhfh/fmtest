/*
JSON is automatically included with each app.

Use the $fh.ready() (http://docs.feedhenry.com/wiki/Ready) function to trigger 
loading the local config and binding a click event to invoke the cloud action 
call which will return the remote config.
*/

$(document).ready(function(){
  // The local config variable from config.js can be accessed directly
  console.log("start js");
  var myScroll;
  $("#hidden").click(function(){
    $('#main').css('overflow','hidden');
  });

  $("#auto").click(function(){
    $('#main').css('overflow','auto');
  });

  $("#iscroll").click(function(){
    console.log("start iscroll");
    myScroll = new iScroll('main',{ bounce: false });
  });

  $("#refresh").click(function(){
    console.log("refresh iscroll");
    myScroll.refresh();
  });

  $("#destroy").click(function(){
    console.log("refresh iscroll");
    myScroll.destroy();
  });

});