
function showNext() {
  removeActive();


  if (activeIndex < images.length - 1) {
    activeIndex++;
  } else {
    activeIndex = 0;
  }
  addActive();
}

function showPrev() {
  removeActive();

  if (activeIndex > 0) {
    activeIndex--;
  } else {
    activeIndex = images.length - 1;
    thumbElem[activeIndex].classList.remove("active");
  }

  addActive();
}


function autoScroll() {
    const order = invertOrder();

    if (clicked === 0) {
        startPlay = setInterval(order, 5000);
        clicked++;
    } else {
        clearInterval(startPlay);
        clicked--;
    }

}

function invertOrder() {
    let order;

    if (orderCount === 0) {
        order = showNext;
        orderCount++;
    } else {
        order = showPrev
        orderCount--;
    }

    return order;
}

function removeActive(){
    carouselItem[activeIndex].classList.remove("active");
    thumbElem[activeIndex].classList.remove("active");
}

function addActive() {
    carouselItem[activeIndex].classList.add("active");
    thumbElem[activeIndex].classList.add("active");
}