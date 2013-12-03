jQuery(document).ready(function($) {
  // We will use these objects a lot
  var body   = document.body,
      doc_el = document.documentElement,
      loc    = window.location;
  
  $('a[href^="#"]').on('click', function(evt) {
    var el,
        target_id,
        target_el,
        target_pos,
        $window = $(window),
        $scroll_el = $('html, body');
    // Make sure this is an internal hash link:
    // Check for hash
    // Compare anchor pathname to location pathname, but with a caveat; IE has a leading '/' in location, but not in anchor pathname
    // So, comparing the indexOf anchor pathname to the difference in lengths works for all browsers (as long as you compensate for -1)
    if (!this.hash || !this.pathname || Math.abs(loc.pathname.length - this.pathname.length) !== loc.pathname.indexOf(this.pathname)) {
      return;
    }
    // Prevent default behaviour
    evt.preventDefault();
    // Find out target
    target_id = this.hash;
    if (target_id[0] === '#') {
      target_id = target_id.substr(1);
    }
    target_el = document.getElementById(target_id);
    if (target_el !== null) {
      // Scroll target should be 20 pixels above the actual target
      target_pos = target_el.offsetTop - 20;
      if (target_pos < 0) {
        target_pos = 0;
      }
    }
    // Is body.style supported and do we have transitionProperty?
    if (typeof body.style === 'undefined' || typeof body.style.transitionProperty !== 'string') {
      // Fallback to jQuery animate
      $scroll_el.animate({
        scrollTop: target_pos
      });
      return;
    }
    // Prevent any blink from the window width change
    body.style.overflowY = 'scroll';
    // Transfer scroll position to negative margin and reset scrollTop to 0
    body.style.marginTop = $window.scrollTop() * -1 + 'px';
    $scroll_el.scrollTop(0);
    // Set scrolling class for associated styles
    body.className += ' scrolling';
    // Change margin
    body.style.marginTop = -1 * target_pos + 'px';
    $(body).one('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', function() {
      body.className = body.className.replace(' scrolling', '');
      body.style.overflowY = '';
      body.style.marginTop = '';
      $scroll_el.scrollTop(target_pos);
    });
  });
});