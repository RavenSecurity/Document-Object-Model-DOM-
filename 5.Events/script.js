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
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

// Create a new <li> in the log below to state when the action was done 

const section3 = document.querySelectorAll("section")[2]
