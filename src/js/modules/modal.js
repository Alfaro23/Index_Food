//modal enter
const enterButton = document.querySelector(".button_header");
const modalEnter = document.querySelector(".enter");
const crossButton = document.querySelectorAll(".enter-cross");

const resetForm = document.querySelector(".reset");
const forgetPassword = document.querySelector(".enter-passwordForm__text");

const regForm = document.querySelector(".reg");
const regEnter = document.querySelector(".regEnter");
const enterRegistrationLink = document.querySelector(".enter-registration__link");

const enterModal = document.querySelector(".enter");
const resetModal = document.querySelector(".reset");
const regModal = document.querySelector(".reg");


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

function openModal(event){

  modalEnter.classList.toggle("active");
  disableScroll();
}
function closeModal(){
  modalEnter.classList.remove("active");
  resetForm.classList.remove("active");
  regForm.classList.remove("active");
  enableScroll();
}

const forget = ()=>{

  resetForm.classList.toggle("active");
  modalEnter.classList.toggle("active");
}

const registration = () => {

  regForm.classList.add("active");
  modalEnter.classList.remove("active");
}
const regBack = ()=>{

  regForm.classList.remove("active");
  modalEnter.classList.add("active");
}



enterModal.addEventListener("click", (event)=>{
  const target = event.target;
  const chek = target.classList.contains("enter");

  (chek) ? closeModal() : console.log("no class")
  
})
resetModal.addEventListener("click", (event)=>{
  const target = event.target;
  const chek = target.classList.contains("reset");

  (chek) ? closeModal() : console.log("no class")
  
})
regModal.addEventListener("click", (event)=>{
  const target = event.target;
  const chek = target.classList.contains("reg");

  (chek) ? closeModal() : console.log("no class")
  
})

crossButton.forEach(item => {
  item.addEventListener("click", closeModal);
})
enterButton.addEventListener("click", openModal);
forgetPassword.addEventListener("click", forget);
enterRegistrationLink.addEventListener("click", registration);
regEnter.addEventListener("click", regBack);
