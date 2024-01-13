import data from './data/data.js';
import Section from './components/Section.js';

console.log(data);

const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend', Section(data.download));
$root.insertAdjacentHTML('beforeend', Section(data.warranty));
$root.insertAdjacentHTML('beforeend', Section(data.care));