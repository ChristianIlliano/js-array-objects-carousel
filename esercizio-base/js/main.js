const carouselElem = document.querySelector(".my-carousel-images");
const thumbContainer = document.querySelector(".my-thumbnails");

let clicked = 0, orderCount = 0;
let startPlay;

const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// const carouselCardContainer = document.querySelector("my-carousel-images");
// images.forEach((curCard)) => {
//   const carouselCard = `
//   <div class="my-carousel-item active" carousel-item="1">
//                   <img
//                     class="img-fluid"
//                     src="./${curCard.image}"
//                     alt="Marvel's Spiderman Miles Morale picture"
//                   />
//                   <div class="item-description px-3">
//                     <h2>${curCard.title}</h2>
//                     <p>
//                     ${curCard.text}
//                     </p>
//                   </div>
//                 </div>
//   `
// }

//Aggiungiamo gli item al carosello
images.forEach((curObject) => {

  carouselElem.innerHTML += `
    <div class="my-carousel-item" carousel-item="1">
      <img
        class="img-fluid"
        src="${curObject.image}"
        alt="${curObject.title} picture"
      />
      <div class="item-description px-3">
        <h2>${curObject.title}</h2>
        <p>
          ${curObject.text}
        </p>
      </div>
    </div>
  `;

  thumbContainer.innerHTML += `
    <img
      class="img-fluid my-thumbnail"
      src="${curObject.image}"
      alt="${curObject.text} picture"
    />
  `
});

//Settiamo index active a tutti gli elementi
const carouselItem = document.querySelectorAll(".my-carousel-item");
let activeIndex = 0;

carouselItem[activeIndex].classList.add("active");

//button eventlistner
const nextBtn = document
  .querySelector(".my-next")
  .addEventListener("click", showNext);

const prevBtn = document
  .querySelector(".my-previous")
  .addEventListener("click", showPrev);

const playBtn = document.getElementById("my-stop-button").addEventListener("click",  autoScroll)
const invertOrderBtn = document.getElementById("my-order-button").addEventListener("click", invertOrder)

const thumbElem = document.querySelectorAll(".my-thumbnail");
thumbElem[activeIndex].classList.add("active")


thumbElem.forEach((curThumb,index)=> {
  curThumb.addEventListener("click", () => {
    removeActive();
    activeIndex = index;
    addActive();
  })
})