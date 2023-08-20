$(function() {
    $('[rel^="lightbox"]').addClass('nyroModal');
    $('[rel^="lightbox"]').nyroModal();

    
        $( "a[href^='\/galerie\/']" ).each( function( index, element ){
            var odkaz=this;
            
            $.post("/admin/src/galerie_title.php", {akce:'select',cesta:$(odkaz).attr('href')},function (data) {
                
                $(odkaz).children('img').attr('title',data);
                $(odkaz).children('img').attr('alt',data);
                $(odkaz).attr('title',data);
                
                //console.log($(odkaz).html());
            });
        });

    
        $.nyroModalSettings({
            processHandler: function(settings) {
                var url = settings.url;
                if (url && url.indexOf('http://www.youtube.com/watch?v=') == 0) {
                    $.nyroModalSettings({
                        type: 'swf',
                        height: 355,
                        width: 425,
                        url: url.replace(new RegExp("watch\\?v=", "i"), 'v/')
                    });
                }
            }
        });

});