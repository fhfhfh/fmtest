/*
JSON is automatically included with each app.

Use the $fh.ready() (http://docs.feedhenry.com/wiki/Ready) function to trigger 
loading the local config and binding a click event to invoke the cloud action 
call which will return the remote config.
*/

$(document).ready(function(){
  // The local config variable from config.js can be accessed directly
  var topPosn, scrollDiv, scrollPosn, offset, newHeight;

  $("input").click(function(e){
    console.log("handle input"+ new Date().getTime()+ " " + e.target.className);
    scrollDiv = $(e.target.parentNode);
    //reset to defaoults
    $("input").off('blur');
    scrollDiv.css("margin-top", "0px");
    scrollDiv.css("transition", "none");
    scrollDiv.css("height", "");

    topPosn = e.target.offsetTop-15;
    scrollPosn = scrollDiv.scrollTop();
    offset = topPosn - scrollPosn;
    // handle what to do with space below current input when div is scrolled up
    if ((scrollDiv[0].scrollHeight - topPosn) > scrollDiv.height()-15) {
      //enough space below - increase height to fill all
      newHeight = scrollDiv.height()+offset;
    }
    else {
      // content 
      if (scrollDiv.scrollTop() < (scrollDiv[0].scrollHeight - scrollDiv.height())) {
        //near bottom and scrolled - increase height by anount scrolled
        newHeight = scrollDiv[0].scrollHeight - scrollDiv.scrollTop();
      }
      else {
        // scroll is at bottom, no need to increase height
        newHeight = "";
      }
    }
    // set up css tranisition to move content above keyboard
    scrollDiv.css({
      "margin-top": "0px",
      "overflow-y": "scroll",
      "height": newHeight
    });
    scrollDiv.css("transition", "all 0.5s ease");
    scrollDiv.css("margin-top", -offset);
    scrollDiv.on("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd", function(){
      scrollDiv.css("transition", "none");
      // unbind listener so it won't fire on blur
      scrollDiv.off("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd");
    });
    $("input").blur(function(e){
      console.log("handle blur" + new Date().getTime() + " " + e.target.className);
      scrollDiv.css("transition", "all 0.5s ease");
      scrollDiv.css("margin-top", 0);
      scrollDiv.on("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd", function(){
        scrollDiv.css("transition", "none");
        scrollDiv.css("height", "");
        scrollDiv.off("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd");
      });  
      $("input").off('blur');
    });
  });
  // //put it back when we're finished
  // $("input").blur(function(e){
  //   console.log("handle blur" + new Date().getTime()+ " " + e.target.className);
  //   scrollDiv.css("transition", "all 1s ease");
  //   scrollDiv.css("margin-top", 0);
  //   scrollDiv.on("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd", function(){
  //     scrollDiv.css("transition", "none");
  //     scrollDiv.css("height", "");
  //     scrollDiv.off("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd");
  //   });  
  // });
  
  // $("form").submit(function(e){
  //     alert("submit");
  //   });

});
