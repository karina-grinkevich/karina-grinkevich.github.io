var $nav = $('nav');

// fullpage customization
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
}); 