/* ========================================================================
 * Bootstrap: extendtool.js v3.3.7
 * ========================================================================
 * Update time: 2017-12-26
 * Copyright 2011-2016 wingkit, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  $(function () {
    $('[data-toggle="alert"]').on('click', function () {
      var target = $(this).attr('data-target');
      $(target).fadeIn("slow").fadeOut(5000);
    })
  });
}
