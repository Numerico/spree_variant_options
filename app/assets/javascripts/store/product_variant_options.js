var show_variant_images = function(variantId) {
  var currentThumb, newImg, thumb;
  ($('li.vtmb')).hide();
  ($('li.vtmb#tmb-' + variantId)).css('display', 'inline-block');
  currentThumb = $('#' + ($('#main-image')).data('selectedThumbId'));
  if (!currentThumb.hasClass('vtmb-' + variantId)) {
    thumb = $(($('ul.thumbnails li:visible.vtmb')).eq(0));
    if (!(thumb.length > 0)) {
      thumb = $(($('ul.thumbnails li:visible')).eq(0));
    }
    newImg = thumb.find('a').attr('href');
    ($('ul.thumbnails li')).removeClass('selected');
    thumb.addClass('selected');
    ($('#main-image img')).attr('src', newImg);
    ($('#main-image')).data('selectedThumb', newImg);
    var slider= $('.flexslider').data('flexslider')
    slider.flexAnimate(0);
    
    return ($('#main-image')).data('selectedThumbId', thumb.attr('id'));
  }
}

var show_all_variant_images = function() {
  $('li.vtmb').show();
}