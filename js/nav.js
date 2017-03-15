
$(document).ready(function () {

  var trigger = $('#menuToggle'),
      overlay = $('.overlay'),
      wrapper = $('.wrapper'),
      nav = $('.navbar-fixed-top'),
      isClosed = false;

  trigger.click(function () {
    menuToggle();
  });

  overlay.click(function () {
    menuToggle();
  });

  function menuToggle() {
    $(this).toggleClass('is-open');

    if (isClosed === true) {
      overlay.fadeTo(200, 0);
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      nav.addClass('is-closed');
      nav.removeClass('is-open');
      wrapper.toggleClass('toggled');
      isClosed = false;
    } else {
      overlay.fadeTo(200, 1);
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      nav.removeClass('is-closed');
      nav.addClass('is-open');
      wrapper.toggleClass('toggled');
      isClosed = true;
    }
  }

});

