'use strict';
import 'bootstrap/dist/js/bootstrap';

$(function() {

  if($('.blue_lg').length){
    blueBg();
    $(window).resize(blueBg);
  
    function blueBg () {
      const blue = $('.bg_blue');
      const itemB = $('.blue_side').offset().left;
  
       
      blue.css('width', itemB);
    }
  }
});
