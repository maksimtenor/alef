// SHOW AND HIDDEN MENU
$(function(){
  $(".header-top__menu-img").click(function() {
    $('.header__main__nav').toggle(300);
  });
});
// Скрывает блок меню при клике вне зоны меню и header блока
// Работает только при разрешении экрана менее 768px
function obnovitStranicu() { 
  $(document).on('click', function(e) {
    if (!$(e.target).closest(".header__main").length) {
      $('.header__main__nav').hide();
    }
    e.stopPropagation();
  });
}
  if (  $(window).width() < 768  ) {
    obnovitStranicu();
  }
// Управление стрелками сортировки цены
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


  // function onEntry(entry) {
//     entry.forEach(change => {
//       if (change.isIntersecting) {
//        change.target.classList.add('element-show');
//       }
//     });
//   }
  
//   let options = {
//     threshold: [0.5] };
//   let observer = new IntersectionObserver(onEntry, options);
//   let elements = document.querySelectorAll('.element-animation');
  
//   for (let elm of elements) {
//     observer.observe(elm);
//   }

document.addEventListener('DOMContentLoaded', function () {
    // инициализация слайдера
    var slider = new SimpleAdaptiveSlider('.slider', {
      autoplay: true,
      interval: 10000,
    });
  });
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("myBtn").style.display = "block";
      } else {
          document.getElementById("myBtn").style.display = "none";
      }
  }
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  