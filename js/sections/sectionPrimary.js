const section = document.createElement('section');
const sectionTitle = document.createElement('h1');
const sectionCopy = document.createElement('p');
const sectionImg = document.createElement('img');

sectionTitle.textContent = 'Peaceful shopping mindful money';

sectionCopy.textContent = 'See how we can help with making your shopping experience and money management more ZEN.';

sectionImg.src = '../img/1.jpg';
sectionImg.alt = 'img1';
sectionImg.style.width = '100%';

section.append(sectionTitle, sectionCopy, sectionImg);

export default section;