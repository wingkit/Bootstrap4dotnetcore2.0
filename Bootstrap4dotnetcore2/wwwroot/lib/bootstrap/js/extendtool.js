/* ========================================================================
 * Bootstrap: extendtool.js v3.3.7
 * ========================================================================
 * Update time: 2017-12-26
 * Copyright 2011-2016 wingkit, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/// <summary> 操作提示弹出窗.</summary>
/// <remarks> WINGKIT, 2017/12/26.</remarks>
+function ($) {
  'use strict';
  var dismiss = '[data-dismiss="tips"]'
  var Tips = function (el) {
    $(el).on('click', dismiss, this.close)
  }
  $('[data-toggle="tips"]').on('click', function () {
    var target = $(this).attr('data-target');
    $(target).fadeIn("slow").fadeOut(5000);
  });

  function Plugin(option) {
    var $this = $(this)
    var msg = option.msg;
    var ret = option.ret;
    var text = ret ? "<span class='success'></span>" : "<span class='fail'></span>";
    text += msg;
    $this.html(text);
    $this.stop();
    $this.fadeIn("fast").fadeOut("normal");
  }

  var old = $.fn.tips

  $.fn.tips = Plugin
  $.fn.tips.Constructor = Tips

}(jQuery);
