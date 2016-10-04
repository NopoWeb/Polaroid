/**
 * Not Another Polaroid Jquery Plugin
 * @author Juan Caser
 * @version 1.0
 */
(function(t){
    t.fn.polaroid = function(options){
        var settings = t.extend({
            class: null,
            title: false,
        }, options);        
        return this.each(function(){
            t(this).wrap('<div class="polaroid' + (settings.class != null ? ' ' + settings.class : '') + '" />');
            if (settings.title === true && typeof t(this).attr('title') !== 'undefined') {
                t(this).parent().append(t('<h4>').html(t(this).attr('title')));
            }
        });
    };
})(jQuery);