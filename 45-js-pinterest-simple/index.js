/**
 * Exercise #
 *
 */


const ulRemove = document.querySelector('ul')
ulRemove.remove();

 const divTemplate = document.createElement('div')
 divTemplate.innerHTML =`
 <button class='button'><i class="fas fa-thumbs-up fa-5x">Likes</i></button>
 <label>Leave your comment bellow</label>
 <form>
   <input type= 'text' style="height: 100px; width: 500px" class='input'>
   </input>
   <button class='btn'>Submit</button>
 </form>
 <ul class='ul'>
 </ul>`
 
 document.body.appendChild(divTemplate)

 const input = document.querySelector('.input')

 const button = document.querySelector('.btn')

 button.addEventListener('click', e => {
	e.preventDefault();
	const ul = document.querySelector('ul')
	const li = document.createElement('li')
	const value = input.value
	li.innerText = value;
	ul.appendChild(li);
  input.value = "";
})
let counter = 0;
const btn = document.querySelector('.button')
btn.addEventListener('click', () =>{
  counter++;
  btn.innerHTML = `<i class="fas fa-thumbs-up fa-5x">${counter} Likes`;
})
