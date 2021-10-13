// ПОКАЗАТЬ ИЛИ СКРЫТЬ МЕНЮ
$(function(){
  $(".header-top__menu-img").click(function() {
    $('.header__main__nav').toggle(300);
  });
});
// СКРЫВАЕТ БЛОК ПРИ КЛИКЕ ВНЕ ЗОНЫ МЕНЮ ИЛИ БЛОКА header
function obnovitStranicu() { 
  $(document).on('click', function(e) {
    if (!$(e.target).closest(".header__main").length) {
      $('.header__main__nav').hide();
    }
    e.stopPropagation();
  });
}
// РАБОТАЕТ ТОЛЬКО ПРИ РАЗРЕШЕНИИ ЭКРАНА МЕНЕЕ 768px
  if (  $(window).width() < 768  ) {
    obnovitStranicu();
  }
// УПРАВЛЕНИЕ СТРЕЛКАМИ СОРТИРОВКИ ЦЕНЫ
  $(function(){
    $('.refine-bar__sort-price-block').click(function () {
      $('.toggle-up').toggleClass('refine-bar__sort--arrow-down');
      $('.toggle-up').toggleClass('refine-bar__sort--arrow-up');
    });

    $('.refine-bar__sort-old-block').click(function () {
      $('.toggle-down').toggleClass('refine-bar__sort--arrow-up');
      $('.toggle-down').toggleClass('refine-bar__sort--arrow-down');
    });
  });
  // ДОБАВЛЕНИЕ АКЦИЙ -40%
  $(function(){
    $('.discount').addClass('main__product-card-item__img-block--discount');
  })
  
  // Когда пользователь прокручивает вниз 20 пикселей от верха документа, покажите кнопку
  $(function(){
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("myBtn").style.display = "flex";
            document.getElementById("myBtn").style.justifyContent = "center";
            document.getElementById("myBtn").style.alignItems = "center";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }
  });
      // Когда пользователь нажимает кнопку, прокручивает документ до верхней части.
      $(document).on("click", "#myBtn", function(e) {
        e.preventDefault();
        $('body, html').animate({scrollTop: 0}, 800);
    });


    $(document).on("click", ".header__main__nav a", function(e) {
      e.preventDefault();
      var id  = $(this).attr('href');
      var top = $(id).offset().top; // получаем координаты блока
      $('body, html').animate({scrollTop: top}, 800); // плавно переходим к блоку
  });



  // ПРОВЕРКА СКОЛЬКО ПРОСКРОЛИЛ ПОЛЬЗОВАТЕЛЬ
  //   window.onscroll = function (e) {
  //     console.log(window.scrollY);
  // }
