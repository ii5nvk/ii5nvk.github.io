$(document).ready(function(){$("body").addClass("js-loaded"),$(".main-menu-link").on("click",function(e){e.preventDefault(),device.mobile()&&$(".burger-menu").trigger("click");var a=$(this).attr("href");return $("body,html").animate({scrollTop:$(a).offset().top-60},800),!1}),$("#mainMenu").onePageNav({currentClass:"current",changeHash:!1,scrollSpeed:750,scrollThreshold:.5,filter:"",easing:"swing"}),$(".fancybox").fancybox(),$(".arrow-down").on("click",function(){return $("body,html").animate({scrollTop:$("#features").offset().top-60},800),!1}),$(".to-the-top").click(function(){$("body,html").animate({scrollTop:0},800)}),$(".header-logo").click(function(){$("body,html").animate({scrollTop:0},800)}),$(".burger-menu").on("click",function(){$(this).toggleClass("menu-on"),$(".fon-burger").toggleClass("expand"),$(".phone-menu li").toggleClass("animate")}),$("#teamslider").on("beforeChange",function(e,a){var o,t,i,s;t=(o=$(a.$slider).find(".slick-current")).attr("class").split(" ")[1],i=o.find("iframe").get(0),s="vimeo"==t?{method:"pause",value:"true"}:{event:"command",func:"pauseVideo"},void 0!=i&&i.contentWindow.postMessage(JSON.stringify(s),"*")}),$(".department-slider").slick({dots:!0,arrows:!1,infinite:!1,speed:300,slidesToShow:1,autoplay:!0,autoplaySpeed:4e3}),device.mobile()?$("#photogallery").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!1}):device.tablet()?$("#photogallery").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,arrows:!0,dots:!1}):$("#photogallery").slick({dots:!0,slidesPerRow:4,rows:2,arrows:!0}),$("#images").slick({dots:!0,arrows:!0,infinite:!0,speed:300,slidesToShow:1,fade:!0,cssEase:"linear",autoplay:!1,autoplaySpeed:2e3}),$(".js-async-load-image-sl").each(function(){var e=$(this);if(!e.data("imageLoaded")){if(device.mobile())var a=e.data("image")+"-m.jpg";else if(device.tablet())a=e.data("image")+"-t.jpg";else a=e.data("image")+".jpg";var o=$("<img>");o.attr("src",a),o.load(function(){e.attr("src",a),e.data("imageLoaded",!0)})}}),$(".js-async-load-image").each(function(){var e=$(this),a=e.data("image");if(!e.data("imageLoaded")){var o=$("<img>");o.attr("src",a),o.load(function(){e.attr("src",a),e.data("imageLoaded",!0)})}})}),function(e){!function(e){for(var a=document.querySelectorAll(".youtube"),o=0;o<a.length;o++){var t="/img/youtube/"+a[o].dataset.embed+".jpg",i=new Image;i.src=t,i.addEventListener("load",void a[o].appendChild(i)),a[o].addEventListener("click",function(){var e=document.createElement("iframe");e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen",""),e.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.embed+"?enablejsapi=1&rel=0&showinfo=0&autoplay=1"),this.innerHTML="",this.appendChild(e)})}e()}(function(){$("#teamslider").slick({arrows:!0,dots:!1,infinite:!0,slidesToShow:3,slidesToScroll:1,centerMode:!0,variableWidth:!0,autoplay:!1,autoplaySpeed:4e3,responsive:[{breakpoint:1024,settings:{arrows:!1,dots:!0}}]})});var a=$("#video"),o=a.attr("data-video");device.mobile()?(a.append("<source type='video/mp4' src='"+o+"480.mp4'/>"),a.append("<source type='video/webm' src='"+o+"480.webm'/>"),a.append("<source type='video/ogg' src='"+o+"480.ogv'/>")):(a.append("<source type='video/mp4' src='"+o+"720.mp4'/>"),a.append("<source type='video/webm' src='"+o+"720.webm'/>"),a.append("<source type='video/ogg' src='"+o+"720.ogv'/>")),$(window).scroll(function(e){e.preventDefault(),function(e){var a=$("#header");if($("#header .color-overlay"),a.length>0){var o=a.height(),t=$(document).scrollTop();if(a.hasClass("home-parallax")&&$(e).scrollTop()<=o&&a.css("top",.55*t),a.hasClass("home-fade")&&$(e).scrollTop()<=o){var i=$(".header-text"),s=$(".header-video-container");i.css("opacity",1-t/a.height()*1),s.css("opacity",.6-t/a.height()*1)}}}(this),0!=$(this).scrollTop()?($(".to-the-top").fadeIn(),$(".main-navigation").addClass("white")):($(".to-the-top").fadeOut(),$(".main-navigation").removeClass("white"))})}(jQuery);