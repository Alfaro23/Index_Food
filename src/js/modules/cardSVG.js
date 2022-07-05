const benefitsCard1 = document.querySelector("#benefits-card-1");
const benefitsCard2 = document.querySelector("#benefits-card-2");
const benefitsCard3 = document.querySelector("#benefits-card-3");
const benefitsCard4 = document.querySelector("#benefits-card-4");

const benefitsCard__img1 = document.querySelector("#benefits-card__img-1");
const benefitsCard__img2 = document.querySelector("#benefits-card__img-2");
const benefitsCard__img3 = document.querySelector("#benefits-card__img-3");
const benefitsCard__img4 = document.querySelector("#benefits-card__img-4");

if(benefitsCard1){
  benefitsCard1.addEventListener("mouseover", ()=>{
    benefitsCard__img1.setAttribute("style", "fill: #fff; transition: .5s;");
  });
  benefitsCard1.addEventListener("mouseout", ()=>{
    benefitsCard__img1.setAttribute("style", "fill: #F37321; transition: .5s;");
  });
  
  benefitsCard2.addEventListener("mouseover", ()=>{
    benefitsCard__img2.setAttribute("style", "fill: #fff; transition: .5s;");
  });
  benefitsCard2.addEventListener("mouseout", ()=>{
    benefitsCard__img2.setAttribute("style", "fill: #F37321; transition: .5s;");
  });
  
  benefitsCard3.addEventListener("mouseover", ()=>{
    benefitsCard__img3.setAttribute("style", "fill: #fff; transition: .5s;");
  });
  benefitsCard3.addEventListener("mouseout", ()=>{
    benefitsCard__img3.setAttribute("style", "fill: #F37321; transition: .5s;");
  });
  
  benefitsCard4.addEventListener("mouseover", ()=>{
    benefitsCard__img4.setAttribute("style", "fill: #fff; transition: .5s;");
  });
  benefitsCard4.addEventListener("mouseout", ()=>{
    benefitsCard__img4.setAttribute("style", "fill: #F37321; transition: .5s;");
  });
}


