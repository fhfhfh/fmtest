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
    console.log("scroll",$('#main').scrollTop());
    console.log("position",$(e.target).position());
    topPosn = e.target.offsetTop-15;
    scrollDiv = $(e.target.parentNode.parentNode);
    scrollPosn = scrollDiv.scrollTop();
    offset = topPosn - scrollPosn;
    newHeight = scrollDiv.height()+offset;
    
    // Set the top margin and scroll
    scrollDiv.css({
      "margin-top": "0px",
      "overflow-y": "scroll",
      "height": newHeight
    });
    // Add the transition property 
    scrollDiv.css("transition", "all 0.7s ease");
    // Apply the scroll effects
    scrollDiv.css("margin-top", -offset);
    // Wait until the transition end
    scrollDiv.on("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd", function(){
      // Remove the transition property
      console.log("111");
      scrollDiv.css("transition", "none");
      scrollDiv.off("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd");
    });
  });

  $("input").blur(function(e){
    scrollDiv.css("transition", "all 1s ease");
    // Apply the scroll effects
    scrollDiv.css("margin-top", 0);
    // Wait until the transition end
    scrollDiv.on("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd", function(){
      // Remove the transition property
      console.log("222");
      scrollDiv.css("transition", "none");
      scrollDiv.css("height", "");
      scrollDiv.off("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd");
    });
    
  });


});

// var easing, e, pos;
// $(function(){
//   // Get the click event
//   $("#go-top").on("click", function(){
//     // Get the scroll pos
//     pos= $(window).scrollTop();
//     // Set the body top margin
//     $("body").css({
//       "margin-top": -pos+"px",
//       "overflow-y": "scroll", // This property is posed for fix the blink of the window width change 
//     });
//     // Make the scroll handle on the position 0
//     $(window).scrollTop(0);
//     // Add the transition property to the body element
//     $("body").css("transition", "all 1s ease");
//     // Apply the scroll effects
//     $("body").css("margin-top", "0");
//     // Wait until the transition end
//     $("body").on("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd", function(){
//       // Remove the transition property
//       $("body").css("transition", "none");
//     });
//   });
// });