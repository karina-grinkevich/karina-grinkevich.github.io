var $nav = $('nav');

// fullpage customization
var isMobile = {
    Android:        function() { return navigator.userAgent.match(/Android/i) ? true : false; },
    BlackBerry:     function() { return navigator.userAgent.match(/BlackBerry/i) ? true : false; },
    iOS:            function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false; },
    Windows:        function() { return navigator.userAgent.match(/IEMobile/i) ? true : false; },
    any:            function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());  }
};
  
if ( !isMobile.any() ) {
  
$('#fullpage').fullpage({
  
  sectionSelector: '.vertical-scrolling',
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['first', 'second', 'third', 'fourth', 'fifth'],
    
  

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink == 'fifth' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
    }
  } 
}); }