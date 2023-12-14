// let box = document.querySelector('box')
// let resetbtn = document.querySelector('reset')

// box.addEventListener("keydown", function(event){
//   if(event.code === 'space')
//     box.style.backgroundColor='blue'
// })



let box = document.querySelector('.box');
let resetbtn = document.querySelector('.reset');

resetbtn.addEventListener('click', function(){
  box.style.backgroundColor='red';
})

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    box.style.backgroundColor = 'blue';
  }
});

