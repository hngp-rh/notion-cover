const data = [
  {
    url: 'https://download.unsplash.com/photo-1430916273432-273c2db881a0',
    text: 'Image 1'
  },
  {
    url: 'https://download.unsplash.com/photo-1428278953961-a8bc45e05f72',
    text: 'Image 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1518731429075-f91c8025641e',
    text: 'Image 3'
  },
  // Add more objects here
];


const pictureElement = document.getElementById('picture');
const textElement = document.getElementById('text');

function updatePicture() {
  const randomIndex = Math.floor(Math.random() * data.length);
  const { url, text } = data[randomIndex];
  pictureElement.style.backgroundImage = `url(${url})`;
  textElement.textContent = text;
}

updatePicture();

setInterval(updatePicture, 5000);

