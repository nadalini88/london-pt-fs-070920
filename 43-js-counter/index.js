let step = 0;
let counter = 0;

/**
 * Exercise 1
 *
 * create a function {action} which will take a {symbol} param: "+" or "-".
 * increment {counter} by {step} if you pass "+", or
 * decrement {counter} by {step} if you pass "-"
 *
 * NOTE: ".counter_value" should always represent the current value of {counter}
 */
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const inputValue = document.getElementById('step').value

let counter = 0;
function action(symbol){
    if (symbol == '+') {
        counter = counter++ * input;
    } else if (symbol == '-') {
        counter = counter-- * input;
    }
    return input;
    // do i need to add up the values?
}
const counterValue = document.getElementsByClassName('counter_value')

/**
 * Exercise 2
 *
 * When the user clicks on "Set step" button, you need to:
 * 1. set {step} to the current value of input.
 * 2. reset value of input field to 1
 * 3. update value of ".step_value" to value of {step}
 *
 * NOTE: {step} should be an integer
 *
 */
const inputBtn = document.getElementsByTagName('button')

inputBtn.addCounterEl.addEventListener('click', () => {
    return inputValue
}

// how can i reset value if function is not being called or when is function being called
const clearInput = () => {
inputValue.reset()
};

// how to update step_value without setting a new permanet value to it
document.querySelector('.step_value').value

  



/**
 * Exercise 3
 *
 * handle click on "#decrement" button and
 * decrement counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
// if value is is negative what to do?
 decrement.addEventListener('click', () => {
    return inputValue * counter--
}


/**
 * Exercise 4
 *
 * handle click on "#increment" button and
 * increment counter by {step}
 *
 * NOTE: remember to use your {action} function
 */

increment.addEventListener('click', () => {
    return inputValue * counter++
}


/**
 * Exercise 5
 *
 * when the user clicks on "#auto_decrement",
 * {counter} should be decremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */

const autoDecrement = document.getElementById('auto_decrement');
autoDecrement.addEventListener('click', () => {
    setTimeout(1, // function to decrement)
    
}




/**
 * Exercise 6
 *
 * when the user clicks on "#auto_increment",
 * {counter} should be incremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */

const autoIncrement = document.getElementById('auto_increment');
autoDecrement.addEventListener('click', () => {
    setTimeout(1, // function to decrement)
    
}


/**
 * Exercise 7
 *
 * when the user clicks on "#stop_auto",
 * the auto counter should stop
 */

 const stopBtn = document.getElementById('stop_auto');

 stopBtn.addEventListener('click', () => {
    preventDefault(1, )// function to decrement)   
 }
 
