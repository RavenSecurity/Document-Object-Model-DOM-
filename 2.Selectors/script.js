const testDom = document.querySelectorAll('.important')
const allImg = document.querySelectorAll('img')
const para = document.querySelectorAll("p")


function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

for (let index = 0; index < testDom.length; index++) {
    const element = testDom[index];
    element.setAttribute("title", "This is an important item");
    console.log(testDom)
}


for (let index = 0; index < allImg.length; index++) {
    const element = allImg[index];
    if (element.className !== "important") {
        element.style.display = "none"; 
    }
    console.log(allImg)
}   

// Exo 3
for (let index = 0; index < para.length; index++) {
    const element = para[index];
    console.log(element.className + ' ' + element.textContent)
}



// Exo 4
for (const iterator of para) {
    if (iterator.className !== 'important') {
    iterator.style.color = generateRandomColor();
    }
}




// for (let index = 0; index < para.length; index++) {
//     const element = para[index];
//     element.style.color = randomColor;
// }