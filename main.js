const imageURLs = [
  'https://download.unsplash.com/photo-1430916273432-273c2db881a0',
 'https://images.unsplash.com/photo-1518731429075-f91c8025641e',
  'https://images.unsplash.com/photo-1544026230-488aeae72c0d',
];

const textList = [
  'Text 1',
  'Text 2',
  'Text 3',
  'Text 4',
  'Text 5',
];


let currentImageIndex = 0;

function updateBodyBg() {
  // Update the background image
  const bgElement = document.querySelector('.dynamic-bg');
  bgElement.style.backgroundImage = `url('${imageURLs[currentImageIndex]}')`;

   // Pick a random text string from the textList array
  const textIndex = Math.floor(Math.random() * textList.length);
  const text = textList[textIndex];
  
  // Update the text on top of the picture
  const textElement = document.querySelector('.dynamic-bg-text');
  textElement.textContent = text;

  // Increment the current image index, or reset it to 0 if we've reached the end of the array
  currentImageIndex = (currentImageIndex + 1) % imageURLs.length;
}

// Call the updateBodyBg() function every 5 seconds
setInterval(updateBodyBg, 5000);

// Call the function once to set the initial background and text
updateBodyBg();
