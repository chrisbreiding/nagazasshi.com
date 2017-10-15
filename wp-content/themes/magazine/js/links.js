jQuery(document).ready(function ($) {

  $('body').addClass('js');
  $('.link').first().addClass('active-link');
  $('.links-nav li').first().addClass('active-link-nav');

  $('.links-nav a').on('click', function (e) {
    e.preventDefault();

    var $this = $(this),
        id = $this.data('id'),
        $link = $('#link-' + id);

    $('.active-link-nav').removeClass('active-link-nav');
    $this.closest('li').addClass('active-link-nav');

    if( !$link.hasClass('active-link') ) {
      $('.active-link').removeClass('active-link').hide();
      $link.addClass('active-link').show();
    }
  });

});
