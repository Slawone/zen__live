const section = document.createElement('section');
const sectionTitle = document.createElement('h2');
const sectionCopy = document.createElement('p');
const sectionImg = document.createElement('img');

sectionTitle.textContent = '1-year warranty boost';

sectionCopy.textContent = 'ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.';

sectionImg.src = '../img/2.jpg';
sectionImg.alt = 'img2';
sectionImg.style.width = '100%';

section.append(sectionTitle, sectionCopy, sectionImg);

export default section;