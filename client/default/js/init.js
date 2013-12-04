/*
JSON is automatically included with each app.

Use the $fh.ready() (http://docs.feedhenry.com/wiki/Ready) function to trigger 
loading the local config and binding a click event to invoke the cloud action 
call which will return the remote config.
*/

$(document).ready(function(){
  // The local config variable from config.js can be accessed directly
  console.log("start js");


  var topPosn, scrollDiv, scrollPosn, offset, newHeight;
  $("#hidden").click(function(){
    $('#main').css('overflow','hidden');
  });

  $("#auto").click(function(){
    $('#main').css('overflow','auto');
  });

  $("input").click(function(e){
    topPosn = e.target.offsetTop-15;
    scrollDiv = $(e.target.parentNode.parentNode);
    scrollPosn = scrollDiv.scrollTop();
    offset = topPosn - scrollPosn;
    if ((scrollDiv[0].scrollHeight - topPosn) > scrollDiv.height()-15) {
      newHeight = scrollDiv.height()+offset;
    }
    else {
      newHeight = "";
    }
    
    scrollDiv.css({
      "margin-top": "0px",
      "overflow-y": "scroll",
      "height": newHeight
    });
    scrollDiv.css("transition", "all 0.7s ease");
    scrollDiv.css("margin-top", -offset);
    scrollDiv.on("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd", function(){
      scrollDiv.css("transition", "none");
      scrollDiv.off("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd");
    });
  });

  $("input").blur(function(e){
    scrollDiv.css("transition", "all 1s ease");
    scrollDiv.css("margin-top", 0);
    scrollDiv.on("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd", function(){
      scrollDiv.css("transition", "none");
      scrollDiv.css("height", "");
      scrollDiv.off("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd");
    });  
  });
  
  // $("form").submit(function(e){
  //     alert("submit");
  //   });

});
