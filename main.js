// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const oops = document.querySelector('#modal')
const like = document.querySelectorAll('.like-glyph')
console.log(typeof(like))
for (let element of like) {element.addEventListener('click',()=>handleclick(element))}

function addHeart(comp){comp.classList.add('activated-heart');comp.textContent = FULL_HEART}
function removeHeart(comp){comp.classList.remove('activated-heart'); comp.textContent = EMPTY_HEART}

function removeHidden(){ oops.classList.remove("hidden") }

function addHidden(){oops.classList.add('hidden')}

function handleclick(instance){
  if (instance.className === 'like-glyph') {console.log(instance.className);return mimicServerCall().then(res=>{
    console.log(res);addHeart(instance);addHidden()}).catch(error=>{console.log(error);oops.textContent=error;removeHeart(instance);removeHidden();setTimeout(addHidden,3000)})}
  else {removeHeart(instance)}
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
