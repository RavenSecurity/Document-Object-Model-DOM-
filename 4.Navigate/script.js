let list = document.querySelector('ol')
let listChild = list.children


const firstLine = listChild[0];
const lastLine = listChild[4];

firstLine.appendChild(lastLine);


console.log(listChild.textContent);


let main = document.querySelector('main')
let mainChild = main.children


let firstSection = main.children[0];
firstSection.setAttribute('id', 'first');


let secondSection = main.children[1];
secondSection.setAttribute('id', 'second');

let thirdSection = main.children[2];
thirdSection.setAttribute('id', 'third');






console.log(mainChild);

secondSection.children[0].setAttribute('id', 'h2-second');

let divSection = thirdSection.children[0].setAttribute('id', 'h2-third');


let h2Second = document.getElementById('h2-second');
let h2Third = document.getElementById('h2-third');

secondSection.appendChild(h2Third);
thirdSection.appendChild(h2Second);


const elem = document.getElementById('third')
elem.remove();