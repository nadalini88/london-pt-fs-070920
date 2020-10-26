

/**
 * Exercise 1
 * create a function {createAList}
 *
 * Requirements:
 * 1. create an unordered list with class "list"
 * 2. with 1 second interval add list item to ".list" element
 * 3. you should add only 5 list items.
 * 4. list item text should be "Item $"($ - position in the list)
 */

const createAList = () => {
  const ul = document.createElement("ul");
  ul.classList.add("list");
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.innerHTML = `Item ${i}`;
    ul.appendChild(li);
}
};

/**
 * Exercise 2
 *
 * create a function {styleElement}
 *
 * Requirements:
 * 1. select the third list item from "".myList"
 * 2. set background to "green" color
 * 3. set color to "white"
 * 4. set font size to 2em
 */
const styleElement = () => {
  const thirdList = document.querySelector(`ul li:nth child(3)`);
  thirdList.style.background = 'green';
  thirdList.style.color = 'white';
  thirdList.style.fontSize = 2em;
};

/**
 * Exercise 3
 *
 * create a function {removeLastChild}
 * Requirements:
 * 1. select last element from the ".myList"
 * 2. wait 2 seconds and remove the element from the list
 */

 const removeLastChild = () => {
  const lastElement = document.querySelector(`ul li:last-child`);
  lastElement.setTimeout(2, lastElement.remove());
}
 removeLastChild()

/**
 * Exercise 4
 *
 * create a function {createAMessage} which takes a message as parameter
 *
 * Requirements:
 * 1. create p element with class "message"
 * 2. text should be your {message}
 * 2. add it to the DOM
 * 4. after 3s add class "visible"
 * 5. after another 3s add class "hide"
 * 6. after another 2s remove from DOM
 *
 * NOTE: check css file to see how we toggle styles
 * based on class "visible"
 */

 const createAMessage = (message) => {
   const elem = document.createElement('p');
   elem.classList.add(message);
   document.append(elem);
   setTimeout(3, elem.classList.add = visible);
   setTimeout(3, elem.classList.add = hide)
   setTimeout(3, elem.remove())
}
 createAMessage();