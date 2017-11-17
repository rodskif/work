//---------- vertical slider -----------------------

(function($) {
    $(function() {
        $('.jcarousel')
            .jcarousel({
                vertical: true
            });

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);

//--------------- photo gallery -------------
//var currentSrc;
var imgAtr;
$(".jcarousel li").on("click", "a", function () {
//    $(".current").removeClass("current");
//    $(this).addClass("current");
   // $(this).addClass("current").siblings().removeClass("current")
    imgAtr = $(this).prop("rel");
//    $(".photo").attr("src", $(this).prop("href"));    
    $("img[rel='"+imgAtr+"']").attr("src", $(this).prop("href"));
//    currentSrc = $(this).prop("href");
   return false;
});
$(".jcarousel li").on("mouseenter", "a", function () {
  $(".current").removeClass("current");
  $(this).addClass("current");
  $(".photo-hover").attr("src", $(this).prop("href"));
   return false;
});

//$(".jcarousel li").on("mouseleave", "a", function () {
//  // $(".current").removeClass("current");
//  $(this).removeClass("current");
//  $(".photo img").attr("src", currentSrc);
//   return false;
//});

//--------------------------- change size ----------------------------
$(".size").on("click", "span", function () {
  $(".text-bordered").removeClass("text-bordered");
  $(this).addClass("text-bordered");
//  $(this).css("border", "1px solid #ccc");
})

//------------------------------------------ Up button ----------------------
function up() {  
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
if(top > 0) {  
  window.scrollBy(0,((top+100)/-10));  
  t = setTimeout('up()',20);  
} else clearTimeout(t);  
return false;  
}
jQuery(function(f){
    var element = f('#back-top');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'Out')](250);           
    });
});

//----------------------- hide top menu to select ------------------------------
//$("<select />").appendTo(".top-menu .navbar-nav");

$("<option />", {
   "selected": "selected",
   "value"   : "",
   "text"    : "Меню >"
}).appendTo(".select");

$(".top-menu .navbar-nav a").each(function() {
 var el = $(this);
 $("<option />", {
     "value"   : el.attr("href"),
     "text"    : el.text()
 }).appendTo(".select");
});

$(".select").change(function() {
  window.location = $(this).find("option:selected").val();
});

//-------------------------- delete text from button when screen 320px ----------------------------
if (matchMedia) {
    const mq = window.matchMedia("(max-width: 320px)");
    $(".toggle-menu").html("");
}

//-------------------------- replace menu item to droop down ----------------------


//var mql = window.matchMedia('all and (max-width: 1055px)');
//if (mql.matches) {
//  $('#collapse-item-7>a').appendTo( $('#dropdown') );
//  $('#collapse-item-7').remove();
//  $('#dropdown .nav-link').addClass('dropdown-item');
//  $('#dropdown .nav-link').removeClass('nav-link');
//}

//--------------------------- copy-paste menu where onen a hamburger ---------------
//$('#navbarNavDropdown').click( sayHallo() );
//function sayHallo () {
//  alert('Hallo!');
//}
//
//$('#navbarNavDropdown').on('click', sayHallo());

$('.navbar-toggler-icon').click(function() {
//      alert('Hallo!');
  $('#dropdown>a').appendTo($('#navbarNavDropdown>ul'));
  $('.dropdown').remove();
  $('#navbarNavDropdown>ul>a').addClass('nav-link dropdown-link');
  $('#navbarNavDropdown>ul>a').removeClass('dropdown-item');
  
  $('#navbarNavDropdown>ul>li>a').addClass('dropdown-link');
  
  $('.sell').appendTo($('#navbarNavDropdown>ul'));
    
 });