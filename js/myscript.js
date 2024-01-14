$(document).ready(function () {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

var preLoadingAnim = document.querySelector("#preloader");

window.addEventListener("load", function () {
  setTimeout(() => {
    preLoadingAnim.style.display = "none";
  }, 6000);
});

//If project logo is larger than 200px make it 100px
// var imgContainer=document.querySelector('.project-logo');
// var imgHeight=imgContainer.querySelector('img').clientHeight;

// if(imgHeight>=200){
//     imgContainer.style.height="80px";
// }

var landerGreeting = document.querySelector(".greeting");

const greetWith = ["Hello!", "नमस्ते!", "Holla!","こんにちは!"];
var countIndex = 0;

setInterval(() => {
  countIndex++;
  if (countIndex == greetWith.length) {
    countIndex = 0;
  }
  changePara(greetWith[countIndex]);
}, 3000);

function changePara(greets) {
  landerGreeting.textContent=greets;
}


//My tab functionality 

var tabButtons=document.querySelectorAll('.my-tab-btn');

tabButtons.forEach(button => {

  button.addEventListener('click',()=>{
      removeTabshow();
      //example tab-btn-1
      var elementsId=button.id;

      var key=elementsId.slice(8, elementsId.length);
      button.classList.add('active-tab-btn');

      console.log(key);
      // var changeTab=document.querySelector('#')
      
      var selectedTab=document.querySelector(`#tab-${key}`);
      selectedTab.classList.add('tab-show');
    })

});

function removeTabshow(){
    var allTabs=document.querySelectorAll('.my-tab');
    allTabs.forEach(tabs=>{
      tabs.classList.remove('tab-show');
    });
    tabButtons.forEach((button)=>{
    button.classList.remove('active-tab-btn');
  });
}