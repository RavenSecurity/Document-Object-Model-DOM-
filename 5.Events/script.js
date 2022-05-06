// Inital Code

const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

// Everytime the user clicks on one of the action squares
//     Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)

const section = document.querySelector("section")

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
  let div = document.createElement("div");
  div.className = 'displayedsquare'+ ' ' + e.target.classList[1]
  section.appendChild(div)

// Create a new <li> in the log below to state when the action was done 
  let list = document.createElement('li')
  let listSection = document.querySelectorAll("section")[2]
  let ulSection = listSection.children[1]
  let chrono = getElapsedTime()
  list.innerHTML = chrono
  ulSection.appendChild(list)
};


const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}


// When the spacebar is hit randomly change the background color of the whole page
function randomColors () {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


document.addEventListener('keypress', (e) =>{
  if(e.which === 32){
    let rand = randomColors()
      document.body.style.backgroundColor = rand
      // console.log('Background Color is ' + randomColors())
  let div = document.createElement('div')
  div.className = 'Bgcolors'
  let main = document.querySelector('main') 
  let section = main.children[0]
  section.appendChild(div)
  let list = document.createElement('li')
  let listSection = main.children[2]
  let ulSection = listSection.children[1]
  list.innerHTML = 'Background is' + ' ' + rand;
  ulSection.appendChild(list)
  }
})


// When the l key is pressed the log gets deleted (erases the generated <li>s). Mind you: using a delete in a for loop might cause issues 
// (as the amount of items to loop over changes), so a while loop might be a good choice instead.
document.addEventListener('keypress', (e) => {
  let ulSection = document.querySelector('ul')
  let code = e.key || e.which

  if (code == "l"){

    ulSection.remove()
    let newSection = document.createElement('ul')
    let main = document.querySelector('main') 
    let listSection = main.children[2];
    listSection.appendChild(newSection);
  }})


  // When the s key is pressed the squares get deleted (erases the generated squares)
  document.addEventListener('keypress', (e) => {
    let square = document.querySelector('.displayedsquare')
    let code = e.key || e.which
    if (code === 's'){
      square.remove()
  }
  })
  