$(document).ready(function(){
    $('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
        $(this)
          .addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
          .closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
    });
});

function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item_content').eq(i).toggleClass('catalog-item_content_active');
            $('.catalog-item_list').eq(i).toggleClass('catalog-item_list_active');
        })
    });
};

toggleSlide('.catalog-item_link');
toggleSlide('.catalog-item_back');

//Modal

$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
});
$('.modal_close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});

$('.button_card_catalog').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal_descr').text($('.catalog-item_content_title').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    })
});