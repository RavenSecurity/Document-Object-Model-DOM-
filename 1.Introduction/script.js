let title = document.getElementsByTagName("title")[0].innerHTML;

console.log(title)

document.title = 'Modifying the DOM';


function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  var randomColor=generateRandomColor();

  
document.body.style.backgroundColor = randomColor;

const myElement = document.getElementById('content');
for (let i = 0; i < myElement.children.length; i++) {
  console.log(myElement.children[i]);
}
