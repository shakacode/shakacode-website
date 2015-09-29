(function($) {
  'use strict';

  // check Mobile Navigation State
  var MobileNavigation = {
    open: false
  };

  // Object to store elements classes
  var ELS = {
    mobileTrigger: '.js-mobile-nav-trigger',
    mobileNavLinks: '.js-mobile-links',
  };

  // Object to store ids and classes used dynamically by JS
  var JS = {
    highlightLink: 'js-highlight-link'
  };

  // handle mobile navigation state and user interation
  function mobileNavigation() {
    $(ELS.mobileTrigger).on('click', function() {

      if (MobileNavigation.open) {
        $(ELS.mobileNavLinks).css('display', 'none');
        MobileNavigation.open = false;
      } else {
        $(ELS.mobileNavLinks).css('display', 'block');
        MobileNavigation.open = true;
      }
    });
  }

  // highlight link on navigation bar based on which page the user is in.
  function highlightActiveLink() {
    // strip "/" from pathnames: /blog/ -> blog
    var path = document.location.pathname.replace(/\//g, '');
    if (!path) return false;
    // we don't need to remove .js-highlight-link from the previous active link because this script runs on every page reload, then the nav bar is fresh.
    $('[data-link-name='+ path +']').addClass(JS.highlightLink);
  }

  function init() {
    $(document).ready(function() {
      mobileNavigation();
      highlightActiveLink();
    });
  }

  init();
}(jQuery));
