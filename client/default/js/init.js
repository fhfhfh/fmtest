/*
JSON is automatically included with each app.

Use the $fh.ready() (http://docs.feedhenry.com/wiki/Ready) function to trigger 
loading the local config and binding a click event to invoke the cloud action 
call which will return the remote config.
*/

$(document).ready(function(){
  // The local config variable from config.js can be accessed directly
  console.log("start js");

  var currentElement, currentElementID="", parentDiv, posn;
  $("input").click(function(e){
    console.log("handle click" + new Date().getTime() + " " + e.target.id);
    currentElement = e.target;
    currentElementID = e.target.id;
    posn = currentElement.offsetTop-20;
    parentDiv = $(e.target.parentNode);
    //check if at bottom of screen and spacer needed
    console.log("bottom dist "+(parentDiv[0].scrollHeight - posn));
    console.log("div height  "+parentDiv.height());
    
    if ((parentDiv[0].scrollHeight - posn) < parentDiv.height()-20) {
      //add in spacer
      console.log("add spacer " + (parentDiv.height()-70+'px') )
      $('#scrollSpacer').css({'display':'block', 'height': parentDiv.height()-70+'px'});
    }
    //scroll to top
    $(e.target.parentNode).animate({scrollTop: posn}, 700);

    //remove the spacer on blur
    $(this).on("blur",function(e){
      console.log("handle blur" + new Date().getTime() + " " + e.target.id);
      console.log("click element "+ currentElementID)
      setTimeout(function() {
        if(currentElementID == e.target.id) {
          console.log("handle blur remove spacer" + new Date().getTime() + " " + e.target.id);
          $('#scrollSpacer').css({'display':'none', 'height': ''});
        }
      },500);
    });

  });

});

