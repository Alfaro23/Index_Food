import * as flsFunctions from "./modules/functions.js";
import "./modules/cardSVG.js";
import "./modules/modal.js";
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
