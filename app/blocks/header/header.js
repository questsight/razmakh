jQuery(document).ready(function () {
  jQuery('.header__formClose').click(function () {
    jQuery('.header__nav_view_hidden').hide();
    jQuery('.header__formZakaz').hide();
    jQuery('.header__formZakazZvonka').hide();
    jQuery('.header__formOtziv').hide();
    jQuery('.header__formClose').hide();
    jQuery('.content__review-text').show();
  });
});
jQuery(document).ready(function () {
  jQuery('.header__button').click(function () {
    jQuery('.header__nav_view_hidden').show();
    jQuery('.header__formClose').show();
    jQuery('.content__review-text').hide();
  });
});
jQuery(document).ready(function () {
  jQuery('.header__Zakaz').click(function () {
    jQuery('.header__formZakaz').show();
    jQuery('.header__formClose').show();
    jQuery('.content__review-text').hide();
  });
});
jQuery(document).ready(function () {
  jQuery('.header__zakazZvonka').click(function () {
    jQuery('.header__formZakazZvonka').show();
    jQuery('.header__formClose').show();
    jQuery('.content__review-text').hide();
  });
});
jQuery(document).ready(function () {
  jQuery('.content__otziv').click(function () {
    jQuery('.header__formOtziv').show();
    jQuery('.header__formClose').show();
    jQuery('.content__review-text').hide();
  });
});















jQuery(document).ready(function(){
  var flag = 0;
  jQuery('.buttonNavigator').click(function(){
    if (flag == 0){
      jQuery('.hidden-xsNo').removeClass('hidden-xs');
      jQuery('.site__content').css('opacity','0.3');
      jQuery('.footer').css('opacity','0.3');
      jQuery(this).css('left','195px');
      jQuery(this).css('transform','rotate(180deg)');
      jQuery('.navigator').show(600);
      jQuery('.buttonSidebar').hide(600);
      flag = 1;
      
      }
      else {
        jQuery('.hidden-xsNo').addClass('hidden-xs');
        jQuery('.site__content').css('opacity','1');
        jQuery('.footer').css('opacity','1');
        jQuery(this).css('left','0');
        jQuery(this).css('transform','rotate(0deg)');
        jQuery('.navigator').hide(600); 
        jQuery('.buttonSidebar').show(600);
        flag = 0;
      }
  });
});