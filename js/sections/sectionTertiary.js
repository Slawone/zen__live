const section = document.createElement('section');
const sectionTitle = document.createElement('h2');
const sectionCopy = document.createElement('p');
const sectionImg = document.createElement('img');

sectionTitle.textContent = 'ZEN Care';

sectionCopy.textContent = 'Shopping online is usually a delightful experience. Until it\'s not.';

sectionImg.src = '../img/3.jpg';
sectionImg.alt = 'img3';
sectionImg.style.width = '100%';

section.append(sectionTitle, sectionCopy, sectionImg);

export default section;