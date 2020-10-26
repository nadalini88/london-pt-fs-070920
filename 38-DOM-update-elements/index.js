// OPEN index.html IN YOUR BROWSER
// OPEN DEV TOOLS, OPEN THE CONSOLE TAB
// CALL YOUR FUNCTIONS IN THE CONSOLE TO
// TEST YOUR CHANGES

/**
 * Exercise 1
 * create a function {setTitle} which takes a string as an argument
 * and displays it in the h1
 */
const setTitle = string => {
    const strings = document.querySelector("h1");
    strings.innerText = string;
  };
  
  /**
   * Exercise 2
   * create a function {appendToTitle} which takes a string as an argument
   * and appends it to existing h1 text
   */
  const appendToTitle = string => {
    const str = document.querySelector("h1");
    str.innerText += string;
  };
  
  /**
   * Exercise 3
   * create a function {prependToTitle} which takes a string as an argument
   * and prepends it to existing h1 element text
   */
  
  const prependToTitle = string => {
    const h1 = document.querySelector("h1");
    h1.innerText = string + h1.innerText;
  };
  
  /**
   * Exercise 4
   * create a function {setInnerHTMLForDiv} which takes a tag name and text as
   * arguments and uses innerHTML to create an element inside the div, and the
   * text is displayed inside that element. The element should the tag name
   * passed into the function
   */
  
  const setInnerHTMLForDiv = (tagname, text) => {
    const div = document.querySelector("div");
    const element = document.createElement(tagname);
    element.innerHTML += text;
    div.append(element);
  };
  
  /**
   * Exercise 5
   * create a function {addPtoDivWithText} which takes a string as an argument
   * and uses innerHTML to add a p tag containing the text into the div
   */
  
  const pushPtoDivWithText = string => {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = string;
    document.querySelector("div").appendChild(paragraph);
  };
  
  /**
   * Exercise 6
   *
   * create a function {setSrcToImage} which takes a url and image description
   * as arguments and set it as a src and alt attributes values
   * for existing img
   */
  
  const setSrcToImage = (url, imageDescription) => {
    const imageDesc = document.querySelector("img");
  
    imageDesc.alt = imageDescription;
  
    imageDesc.src = url;
  
    console.log(imageDesc);
  };
  
  /**
   * Exercise 7
   *
   * create a function {setCodersInHoodsLink} which takes 2 arguments, a URL
   * and some text
   *
   * Find the a tag in the page, set the href to the URL and display the text
   *
   * Also add an attribute that opens your page in a new tab
   */
  
  const setCodersInHoodsLink = (URL, text) => {
    const tagA = document.querySelector("a");
    tagA.href = URL;
    tagA.innerText = text;
    tagA.target = "_blank";
  };
  
  /**
   * Exercise 8
   *
   * create a function {disableResetBtn} which will disable button
   * with class "reset"
   */
  const disableResetBtn = () => {
    const button = document.querySelector(".reset");
    button.disabled = true;
  };
  
  /**
   * Exercise 9
   *
   * create a function {disableBtns} which takes class name as an argument
   * and disable all buttons with this class name
   */
  
  const disableBtns = className => {
    const btns = document.getElementsByClassName(className);
    for (let i = 0; i < btns.length; i++) {
      const btn = btns[i];
      btn.disabled = true;
  }
  };
  
  /**
   * Exercise 10
   *
   * create a function {addClassToLi} which adds the class
   * "list_item_$" (where $ is a position in a list) to each li
   * that is inside the ul with the class "list"
   *
   * NOTE: We've added some CSS so when your classes are added,
   * you will see a difference
   */
  
  /**
   * Exercise 11
   *
   * create a function {removeListItemClass} which removes the class
   * "list_item" from all li elements with this class
   */
  const removeListItemClass = param => {
    const removeClass = document.getElementsByClassName("list_item");
    removeClass.remove();
  };
  /**
   * Exercise 12
   *
   * create a function {addId} which takes 2 arguments: an id and
   * a CSS selector. Use to selector to find an element, then add
   * the id to the element
   */
  
  /**
   * Exercise 13
   *
   * create a function {setStyles} which takes 3 arguments
   * 1 - a CSS property name,
   * 2 - property value,
   * 3 - a CSS selector
   *
   * use the selector to find all the elements which match, then
   * set the CSS property to the value
   */
  