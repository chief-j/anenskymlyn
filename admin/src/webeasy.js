        var pole_prvku=new Array();
        var pole_url=new Array();
        var pole_title=new Array();
        
        function simpleSlider(el,i,t) {
             
            if(i) {
              i++;
              if(i==pole_prvku.length) i=0;
            } else {
              i = 1;
            }
            
            $(el).attr("src",pole_prvku[i]);
            $(el).parent().attr("href",pole_url[i]);
            $(el).next().html(pole_title[i]);
            
            var timeout = setTimeout(function() {
              simpleSlider(el,i,t);
            }, t); 
        }

JQ = $;  //rename $ function
        
JQ(function() {
            JQ("#weather").load("weather.php?pocet=3&loc=EUR|CZ|EZ002|ZAMBERK&mesto=Klasterec%20nad%20Orlici&ico=14&size=large&lang=cze&url=index.php%3Fw%3D%271%27%26lang%3Dcze");

            $.ajax({
                type: "GET",
                url: "/images/kamery/slides-kam.php",
                dataType: "xml",
                success: function(xml) {
                    $(xml).find('slide').each(function(){
                        var jpegurl = $(this).attr('jpegURL');
                        var url = $(this).attr('url');
                        var title = $(this).attr('title');
                        pole_prvku.push('/images/kamery/'+jpegurl);
                        pole_url.push(url);
                        pole_title.push(title);
                    });
                simpleSlider('.webeasyslider',null,8000);
                }
            });

            
    
            
        });
