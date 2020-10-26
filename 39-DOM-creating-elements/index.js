// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {createDOMElement} which takes a tag name
 * as an argument and returns a new DOM element.
 *
 * NOTE: we will use this function for other exercises.
 */

/**
 * Exercise 2
 *
 * create a function {addPTag} which takes some text as an argument,
 * create a "p" tag which displays the text and appends it to
 * the body of the document
 */

/**
 * Exercise 3
 *
 * create a function {addElementWithClass} which takes tag name,
 * text and class name as arguments. It should create an element
 * which displays the text and has the class and appends
 * the element to the body
 */

/**
 * Exercise 4
 *
 * create a function {addElementWithMultipleClasses} which takes tag name,
 * text and an array of classes. Create an element which displays the
 * text, has the array of classes and append it to the body
 */

/**
 * Exercise 5
 *
 * create a function {buildAList} which takes a few arguments
 * 1 - list type ("ul" or "ol")
 * 2 - a class for the list element
 * 3 - a number of li elements that need to be created
 *
 * Each li should have the text "Item $" (where $ is it's position)
 * Add the list element to the body
 */

/**
 * Exercise 6
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {prependLiToList} which takes some text and
 * a class as arguments.
 *
 * Create a new li element which displays the text and has the class.
 *
 * Add that li to the list in your page, but the new li must be the
 * FIRST item in the list.
 *
 */

/**
 * Exercise 7
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {pushToSelectedPosition} which takes some text,
 * a class and a position (index).
 *
 * Create an li with the text and class.
 *
 * Add the li into the list at the position passed to this function.
 *
 */

/**
 * Exercise 8
 *
 * create a function {deleteChildrenElements} which takes
 * a parent selector and an element selector
 *
 * Find the parent element, then remove any ancestors of that
 * element which match the element selector
 *
 */
// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {createDOMElement} which takes a tag name
 * as an argument and returns a new DOM element.
 *
 * NOTE: we will use this function for other exercises.
 */

const createDOMElement = tagName => {
    const tag = document.createElement("p");
    return tag;
  };
  
  /**
   * Exercise 2
   *
   * create a function {addPTag} which takes some text as an argument,
   * create a "p" tag which displays the text and appends it to
   * the body of the document
   */
  const addPTag = text => {
    const pTag = document.createElement("p");
    pTag.innerText = text;
    document.body.append(pTag);
  };
  
  /**
   * Exercise 3
   *
   * create a function {addElementWithClass} which takes tag name,
   * text and class name as arguments. It should create an element
   * which displays the text and has the class and appends
   * the element to the body
   */
  function addElementWithClass(tag, text, className) {
    const span = document.createElement(tag);
    span.innerText = text;
    span.classList.add(className);
    document.body.appendChild(span);
  }
  /**
   * Exercise 4
   *
   * create a function {addElementWithMultipleClasses} which takes tag name,
   * text and an array of classes. Create an element which displays the
   * text, has the array of classes and append it to the body
   */
  const addElementWithMultipleClasses = (tagName, txt, classes) => {
    const addElement = document.createElement(tagName);
    addElement.innerText = txt;
    addElement.classList.add(...classes);
    document.body.append(addElement);
  };
  
  /**
   * Exercise 5
   *
   * create a function {buildAList} which takes a few arguments
   * 1 - list type ("ul" or "ol")
   * 2 - a class for the list element
   * 3 - a number of li elements that need to be created
   *
   * Each li should have the text "Item $" (where $ is it's position)
   * Add the list element to the body
   */
  
  const buildAList = (list, classes, number) => {
    console.log("test");
    const ul = document.createElement(list);
    number = parseInt(number);
    if (ul.tagName == "UL" || ul.tagName == "OL") {
      if (classes != "" && typeof classes == "string") {
        ul.classList.add(classes);
  }
      if (number != "NaN" && number > 0) {
        for (let i = 1; i <= number; i++) {
          li = document.createElement("li");
          li.innerHTML = `Item ${i}`;
          ul.appendChild(li);
  }
  }
  }
    document.body.appendChild(ul);
  };
  buildAList("UL", "", 9);
  /**
   * Exercise 6
   * !!! to test this function in your browser, first run {buildAList} !!!
   *
   * create a function {prependLiToList} which takes some text and
   * a class as arguments.
   *
   * Create a new li element which displays the text and has the class.
   *
   * Add that li to the list in your page, but the new li must be the
   * FIRST item in the list.
   *
   */
  const prependLiToList = (text, classes) => {
    const li = document.createElement("li");
    li.classList.add(classes);
    li.innerText = text;
  
    const currentLi = document.body.querySelector("ul").innerHTML;
    const newLi =
      "<li class='" + classes + "'>" + li.innerHTML + "</li>" + currentLi;
    document.body.querySelector("ul").innerHTML = newLi;
  };
  prependLiToList("anything");
  /**
   * Exercise 7
   * !!! to test this function in your browser, first run {buildAList} !!!
   *
   * create a function {pushToSelectedPosition} which takes some text,
   * a class and a position (index).
   *
   * Create an li with the text and class.
   *
   * Add the li into the list at the position passed to this function.
   *
   */
  const pushToSelectedPosition = (text, classes, index) => {
    let li1 = document.createElement("li");
    li1.classList.Add(classes);
  };
  
  /**
   * Exercise 8
   *
   * create a function {deleteChildrenElements} which takes
   * a parent selector and an element selector
   *
   * Find the parent element, then remove any ancestors of that
   * element which match the element selector
   *
   */
  