/**
* Not Another Polaroid Jquery Plugin
* @author Nopo Web Solutions
* @version 1.0
*/
!function(t){t.fn.polaroid=function(i){var l=t.extend({"class":null,title:!1},i);return this.each(function(){t(this).wrap('<div class="polaroid'+(null!=l["class"]?" "+l["class"]:"")+'" />'),l.title===!0&&"undefined"!=typeof t(this).attr("title")&&t(this).parent().append(t("<h4>").html(t(this).attr("title")))})}}(jQuery);