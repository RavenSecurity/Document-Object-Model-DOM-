// Select the last child of the <ol> tag and put it at the beginning of the list

const ol = document.querySelector("ol");

const a = ol.children[0];
const b = ol.children[4];

ol.insertBefore(b, a);

// Move the <h2> of the third section in the second one and vice-versa

const section2 = document.querySelectorAll("section")[1];
const section3 = document.querySelectorAll("section")[2];

const section2h2 = section2.querySelector("h2");
const section3h2 = section3.querySelector("h2");

section2.replaceChild(section3h2, section2h2);

// Delete the last section from the DOM, we don't need it anyways

section3.remove()