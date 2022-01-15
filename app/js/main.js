$(function(){
// Плавный скролл
$(".menu a").on("click", function (event) {
		
  event.preventDefault(); 
  let id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1000);
});

// Анимация при скроле
AOS.init({
  offset: 100,
  duration: 1000,
  once: true, //Анимация будет 1 раз.
});

});

// Start burger menu
let menuBtn = document.querySelector('#menu-btn');
let menu = document.querySelector('.header .menu');

menuBtn.onclick = () =>{
  menuBtn.classList.toggle('fa-times');
  menu.classList.toggle('active');
}  

window.onscroll = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("fa-times");
};
// End burger menu


