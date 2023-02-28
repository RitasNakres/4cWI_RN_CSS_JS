const imageElement = document.getElementById('my-image');

const imageUrls = [
  'https://www.seekpng.com/png/detail/816-8161371_rock-paper-scissor-icon-png.png',
  'https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png',
];

let currentImageIndex = 0;

setInterval(() => {
  imageElement.src = imageUrls[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
}, 2000);