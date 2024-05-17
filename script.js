function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


let images = [
    "assets/LinkedinPhoto.png",
    "assets/Horses.png",
    "assets/SonWithMother.png",
    "assets/LakePicture.png"
]


let index = 0;
const imgElement = document.querySelector('#slider-img');

function change() {
   imgElement.src = images[index];
   index > 2 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 2000);
};