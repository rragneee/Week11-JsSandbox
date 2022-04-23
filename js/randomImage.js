const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["firstphoto.jpeg", "secondphoto.jpeg", "thirdphoto.jpeg", "fouthphoto.jpeg"];

myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = "images/" + images [randomIndex];
}