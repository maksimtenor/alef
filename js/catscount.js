// Подсчет количества блоков "найдено котов"
$(function() {
    var elemCount = $('.main__product-card-item').length;
    $('.header__cats-value').text('Найдено ' + elemCount + ' котов');
    console.log(elemCount);
})
