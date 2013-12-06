$(document).ready(function(){
  console.log("start js");
  $("input").off('click', 'blur');
  var currentElement, currentElementID="", parentDiv, posn, spacerHeight=0, distToBottom;
  $("input").click(function(e){
    console.log("handle click" + new Date().getTime() + " " + e.target.id);
    currentElement = e.target;
    currentElementID = e.target.id;
    parentDiv = $(e.target.parentNode);
    // get distance to top of scroll of selected element  
    posn = currentElement.offsetTop - 20 ;
    //get distance to bottom of div
    // find distance to bottom of scoll of the selected element
    // check if spacer present and adjust heights if necessary
    if($('#scrollSpacer').css('display') == "block") {
      //get spacerheight
      var height = $('#scrollSpacer').css('height');
      spacerHeight = height.substring(0,height.length-2);
    }
    distToBottom = parentDiv[0].scrollHeight - posn - spacerHeight;



    // check if at bottom of screen and spacer needed
    if ((distToBottom) < parentDiv.height()-20 || spacerHeight > 0 ){
      //add in spacer
      console.log("add spacer " + (parentDiv.height()-70+'px') );
      $('#scrollSpacer').css({'display':'block', 'height': parentDiv.height()-65+'px'});
      // if spacer is added set up blur to remove it
      $("input").off('blur');
      console.log("add blur " + new Date().getTime() + " " + e.target.id );
      $(this).on("blur",function(e){
        console.log("handle blur "  + e.target.id + " current " + currentElementID) ;
        setTimeout(function() {

          if(currentElementID == e.target.id) {
            console.log("in blur - remove spacer " + new Date().getTime() + " " + e.target.id);
            //check if we need to remove spacer
            if($('#scrollSpacer').css('display') == "block") {
              var maxScroll = parentDiv[0].scrollHeight - parentDiv.height();
              var currentScroll = parentDiv[0].scrollTop;
              var height = $('#scrollSpacer').css('height');
              if ((maxScroll - currentScroll) > height.substring(0,height.length-2)) {
                // scrolled enough to just delete it
                $('#scrollSpacer').css({'display':'none', 'height': ''});
              } 
              else {
                // animate page down to allow for removal of spacer
                // posn = maxScroll - currentScroll;
                posn = $(parentDiv).scrollTop() - height.substring(0,height.length-2) + maxScroll - currentScroll;
                $(e.target.parentNode).animate({scrollTop: posn}, 700, function () {
                  $('#scrollSpacer').css({'display':'none', 'height': ''});
                });
              }
            }
          }
        },500);
      });
    }
    //scroll to top
    $(e.target.parentNode).animate({scrollTop: posn}, 700);
  });

});

 
 //    // find distance to bottom of scoll of the selected element
 //    // check if spacer present and adjust heights if necessary
 //    if($('#scrollSpacer').css('display') == "block") {
 //      //get spacerheight
 //      var height = $('#scrollSpacer').css('height');
 //      spacerHeight = height.substring(0,height.length-2);
 //    }