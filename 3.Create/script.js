// Random Color Function

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


// generate eachn name's section

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

let arr = ["Gilles", "Jamie", "Jason", "Jeremy", "Martin", "Emre", "Rayane", "Rayhan", "Ricardo", "Steffanie", "Sebastien", "Tanguy", "Thibaud", "Zakaria"];

shuffle(arr)

for (let elem of arr) {
    let nextSection = document.createElement("section");
    let newText = document.createTextNode(elem);
    let selectArt = document.querySelector("article");
    nextSection.appendChild(newText);
    selectArt.appendChild(nextSection);
    nextSection.style.backgroundColor = generateRandomColor();

    if (nextSection.style.backgroundColor > "#E66EB2") {
        nextSection.style.color = "#ff000";
    } else nextSection.style.color = "#001217";
    
    
    // // if ((red*0.299 + green*0.587 + blue*0.114) > 186) {
    // //     document.getElementById("myH2").style.color = "#ff0000";
    // // }  else use #ffffff;

}