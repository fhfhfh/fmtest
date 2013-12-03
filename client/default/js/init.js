/*
JSON is automatically included with each app.

Use the $fh.ready() (http://docs.feedhenry.com/wiki/Ready) function to trigger 
loading the local config and binding a click event to invoke the cloud action 
call which will return the remote config.
*/

$(document).ready(function(){
  // The local config variable from config.js can be accessed directly
  console.log("start js");

  var listener = function (e) {
    e.preventDefault();
  }

  document.addEventListener('touchmove', listener, false);

  var myScroll;
  $("#hidden").click(function(){
    $('#main').css('overflow','hidden');
  });

  $("#auto").click(function(){
    $('#main').ontouchmove=function(e){return true;}
    $('#main').css('overflow','auto');
  });

  $("#iscroll").click(function(){
    console.log("start iscroll");
    myScroll = new iScroll('main',{
      bounce: false ,
      hScroll: false,
      onBeforeScrollStart: function (e) {
            var target = e.target;
            while (target.nodeType != 1) target = target.parentNode;

            if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA')
                e.preventDefault();
        }
    });
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