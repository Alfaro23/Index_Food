import * as flsFunctions from "./modules/functions.js";
import "./modules/cardSVG.js";
import "../../node_modules/swiper/swiper-bundle.min.js";

import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    loopedSlides: 1,
    allowTouchMove: true,
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.slide-button__buttons-next',
      prevEl: '.slide-button__buttons-prev',
    },
  
    
  });

flsFunctions.testWebP();


//для ограничения текста в карточке товара
const foodCardDescription = document.querySelectorAll(".food-card__description");
let rezult;

foodCardDescription.forEach((item)=>{
  //91 всего символов в макете
  if(item.textContent.length >= 91){
      rezult = item.textContent.slice(0, 91) + "...";
      item.innerHTML = "";
      item.innerHTML = rezult;
  }
})


//modal enter
let enterButton = document.querySelector(".button_header");
const modalEnter = document.querySelector(".enter");
const crossButton = document.querySelector(".enter-cross");

const disableScroll = ()=>{
  const widthScroll = window.innerWidth - document.body.offsetWidth;  //ширина окна минус ширина страницы для получения ширины скролла
  
  // Сохраню позицию по Y чтобы страница не прыгала вверх или вниз
  document.body.dbScrollY = window.scrollY;

  //стили для избежания скачков вверх или вниз и в право или лево
  document.body.style.cssText = `
      position: fixed;
      top: ${-window.scrollY}px;
      left: 0;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      padding-right: ${widthScroll}px;
  `
};

const enableScroll = ()=>{ 
  document.body.style.cssText = ``;
  window.scroll({
      top: document.body.dbScrollY,
  });
};

function openModal(){
  modalEnter.classList.toggle("active");
  disableScroll();
}
function closeModal(){
  modalEnter.classList.toggle("active");
  enableScroll();
}

// if(enterButton){ 
//   enterButton.addEventListener("click", openModal);
//   console.log("some test")
// }

enterButton.addEventListener("click", openModal);
crossButton.addEventListener("click", closeModal);