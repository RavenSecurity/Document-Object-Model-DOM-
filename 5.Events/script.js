const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's' + ' ' + '[New Square Created]'
}

const clickOnSquare = (e) => {

  // console.log(e.target.classList[1])
  // console.log(getElapsedTime())
  let div = document.createElement('div')
  div.className = 'displayedsquare'+ ' ' + e.target.classList[1]
  let main = document.querySelector('main')
  let section = main.children[0]
  section.appendChild(div)

    let list = document.createElement('li')
    let listSection = main.children[2]
    let ulSection = listSection.children[1]
    let chrono = getElapsedTime()
    list.innerHTML = chrono
    ulSection.appendChild(list)




}

const actionSquares = document.querySelectorAll('.actionsquare')


    for (let actionSquare of actionSquares) {


        actionSquare.addEventListener('click', clickOnSquare)

        
    }


    function randomColors () {

      var o = Math.round, r = Math.random, s = 255;
      return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';

    }

document.addEventListener('keypress', (e) =>{
    if(e.which === 32){
        document.body.style.backgroundColor = randomColors() 
        // console.log('Background Color is ' + randomColors())
    let div = document.createElement('div')
    div.className = 'Bgcolors'
    let main = document.querySelector('main') 
    let section = main.children[0]
    section.appendChild(div)
    let list = document.createElement('li')
    let listSection = main.children[2]
    let ulSection = listSection.children[1]
    let colors = randomColors()
    list.innerHTML = 'Background is' + ' ' + colors;
    ulSection.appendChild(list)

    }
  

})


document.addEventListener('keypress', (e) => {
  
  
  let ulSection = document.querySelector('ul')
  let code = e.key || e.which

  if (code == "l"){

    ulSection.remove()
    let newSection = document.createElement('ul')
    let main = document.querySelector('main') 
    let listSection = main.children[2];
    listSection.appendChild(newSection);


  }

  // console.log(code)

})

document.addEventListener('keypress', (e) => {

  let square = document.querySelector('.displayedsquare')
  let code = e.key || e.which




  if (code === 's'){

    square.remove()
    
    
}

})
