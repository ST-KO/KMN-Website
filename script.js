// Script for navigation bar
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

const mainImg = document.getElementById("MainImg");
const smallImg = document.getElementsByClassName("small-img");
const shopImg = document.getElementsByClassName("shop-img");



document.addEventListener("DOMContentLoaded", function () {
    const storedImageSrc = localStorage.getItem('selectedImage');

    if (storedImageSrc) {
        mainImg.src = storedImageSrc;
        localStorage.removeItem('selectedImage'); // clear the stored value
    }
});



for(let i = 0; i < smallImg.length; i++){
    smallImg[i].onclick = function(){
        mainImg.src = smallImg[i].src;
    }
}

for(let i = 0; i < shopImg.length; i++){
    shopImg[i].onclick = function() {
        localStorage.setItem('selectedImage', shopImg[i].src);
        window.location.href = "sproduct.html";
    }
}

if(bar){
    bar.addEventListener("click", () => {
        nav.classList.add('active');
    });
}

if(close){
    close.addEventListener("click", () => {
        nav.classList.remove('active');
    })
}