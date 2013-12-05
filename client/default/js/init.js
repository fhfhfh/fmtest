/*
JSON is automatically included with each app.

Use the $fh.ready() (http://docs.feedhenry.com/wiki/Ready) function to trigger 
loading the local config and binding a click event to invoke the cloud action 
call which will return the remote config.
*/

$(document).ready(function(){
  // The local config variable from config.js can be accessed directly
  console.log("start js");

  var currentElement, parentDiv, posn;
  $("input").click(function(e){
    currentElement = e.target
    posn = currentElement.offsetTop-20;
    parentDiv = $(e.target.parentNode);
    if ((parentDiv[0].scrollHeight - posn) < parentDiv.height()-20) {
      //add in spacer
      $('#scrollSpacer').css({'display':'block', 'height': parentDiv.height()+20+'px'})
    }
    $(e.target.parentNode).animate({scrollTop: posn}, 700);
  });


});

