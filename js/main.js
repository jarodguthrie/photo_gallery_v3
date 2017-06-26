
function searchInput() {
  $('#search').on('keyup', function() {
    var searchData = $(this).val();
    $('li a').each(function() {
      var textSearch = $(this).attr('data-title');
      if( textSearch.search(new RegExp(searchData, 'i')) < 0) {
        $(this).hide();
      } else {
        $(this).show();
      }
      var listQty = $('.hide').children().length;
      var hiddenImgages = $('li').children(':hidden').length;
      if(hiddenImgages === listQty) {
        $('.no-img').html("<h1>No images found</h1>");
      }
      if(hiddenImgages < listQty) {
        $('h1').empty();
      }
    });
  });
}

searchInput();
