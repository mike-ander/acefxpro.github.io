/* 

1. Add your custom JavaScript code below
2. Place the this code in your template:

  

*/
wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();

// $(window).scroll(function() {
// 	var $height = $(window).scrollTop();
// 	console.log($height);
//   if($height > 480) {
// 		$('#GFG_scrollspy').find('ul').addClass('activefixed');
// 	} else {
// 		$('#GFG_scrollspy').find('ul').removeClass('activefixed');
// 	}
// });
$(window).scroll(function() {
  try{
var $height = $(window).scrollTop();
  if($height > 480) {
    $('.scolllist').addClass('activefixed');
  } else {
    $('.scolllist').removeClass('activefixed');
  }
  }catch(e){

  }
	
});
//scrollSpy function
    function scrollSpy() {
      var sections = [
      	'glossary-section__A',
		'glossary-section__B',
		'glossary-section__C',
		'glossary-section__D',
		'glossary-section__E',
		'glossary-section__F',
		'glossary-section__G',
		'glossary-section__H',
		'glossary-section__I',
		'glossary-section__J',
		'glossary-section__K',
		'glossary-section__L',
		'glossary-section__M',
		'glossary-section__N',
		'glossary-section__O',
		'glossary-section__P',
		'glossary-section__Q',
		'glossary-section__R',
		'glossary-section__S',
		'glossary-section__T',
		'glossary-section__U',
		'glossary-section__V',
		'glossary-section__W',
		'glossary-section__X',
		'glossary-section__Y',
		'glossary-section__Z'
		];
      var current;

      for (var i = 0; i < sections.length; i++) {
        if ( $('#'+sections[i]).offset().top - 220 <= $(window).scrollTop() ) {
          current = sections[i];
        }
      }

      $("nav a[href='#"+current+"']").addClass('active');
      $("nav a").not("a[href='#"+current+"']").removeClass('active');      
    }

    // smooth scrolling navigation
    $("nav a").click( function() {
      var target = $(this).attr("href");
      $("body, html").animate({
        scrollTop: $(target).offset().top - 200
      }, 300);
      return false;
    });

    //scrollSpy call
    try{
      $(document).ready( function() {
      scrollSpy();
    });
    }catch(e){}
    
try{
      $(window).scroll( function() {
      scrollSpy();
    });
    }catch(e){}
    