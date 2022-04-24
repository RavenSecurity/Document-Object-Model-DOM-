// PART 1

const ol = document.querySelector('ol')
const a = ol.children[0]
const b = ol.children[4]



ol.insertBefore(b, a);

// PART 2

const main = document.querySelector('main')
const section1 = main.children[0]
const section2 = main.children[1]
const section3 = main.children[2]

console.log(section3.children[0])



// section3.children[0].appendChild(section2.children[0])



// PART 3

