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

  function init() {
    $(document).ready(function() {
      mobileNavigation();
    });
  }

  init();
}(jQuery));
