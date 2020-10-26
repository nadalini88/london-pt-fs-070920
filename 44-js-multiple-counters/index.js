// const addCounterEl = document.querySelector("#new_timer");
// const timersContainerEl = document.querySelector(".timers");

// // USE THIS VARIABLE TO COUNT TIMERS
// let timersCount = 0;

/**
 * Exercise 1
 *
 * create a function {createTimerEl} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
 */


const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");


let timersCount = 0;

// Dummy code

const createTimerTemplate = () => {
    const divTimer = document.createElement(`div`);
    divTimer.classList.add('timer', 'timer_' + timersCount);

    divTimer.innerHTML = `
        <div class="remove"></div>
        <h3>0 <span>00</span></h3>
        <div class="btn">
            <button class="reset">Reset</button>
            <button class="stop">Stop</button>
        </div>
    `
    return divTimer;
};


const createTimerEl = () => {
    const timer = createTimerTemplate()
    const stopBtn = timer.querySelector('.stop')
    const resetBtn = timer.querySelector('.reset')
    const removeItem = timer.querySelector('.remove')
    let counter = 0;
    const createInterval = () => {
       return setInterval(() => {
            counter++;
            const s = Math.floor(counter / 100);
            const ms = counter % 100
            const h3 = timer.querySelector('h3')
            h3.innerHTML = `${s} <span>${ms}</span>`
        }, 10)
    }
    let interval = createInterval();
    stopBtn.addEventListener('click', () => {
        clearInterval(interval);
    })
    resetBtn.addEventListener('click', () => {
        counter = 0;
        clearInterval(interval);
        interval = createInterval();
    })
    removeItem.addEventListener('click',() =>{
        clearInterval(interval);
        timer.remove();
    })
    document.body.appendChild(timer);

}

addCounterEl.addEventListener('click', () => {
    const avalaibleTimers = document.querySelectorAll('.timer');

    if (avalaibleTimers.length < 5) {
        timersCount++;
        createTimerEl(timersCount);
    }
});



/**
 * 1. create a function which will create timer template
 * 2. create createTimer function  that will have all listeners and will update time for the timer and actual time element.
 * 3. in the end of createTimer function you will add the timer to the page.
 */






// const createTimerEl = (number) => {
//     const divTimer = document.createElement(`div`);
//     divTimer.classList.add('timer');
//     divTimer.classList.add('timer_'+number);
//     const divRemove = document.createElement('div')
//     divRemove.classList.add('remove')
// divRemove.addEventListener('click', () => {

// })

//     const h3 = document.createElement('h3');
//     h3.classList.add('counter'+ number)
//     const span = document.createElement('span');
//     h3.innerHTML = `0`
//     span.innerText = `00`
//     h3.appendChild(span);


//     const div = document.createElement('div');
//     div.classList.add('btn');
//     const buttonReset = document.createElement('button');
//     buttonReset.classList.add('reset');
//     buttonReset.innerText = 'Reset';
//     div.appendChild(buttonReset);
//     const buttonStop = document.createElement('button');
//     buttonStop.classList.add('stop');
//     buttonStop.innerText = 'Stop';
//     div.appendChild(buttonStop);

//     divTimer.appendChild(divRemove);
//     divTimer.appendChild(h3);
//     divTimer.appendChild(div);

//     document.body.appendChild(divTimer);

//     removeItem(number);
//     startTimer(number);
//     resetItem(number);
//     stopItem(number);

// }

// function removeItem (timerID) {
// document.querySelector('.timer_'+timerID+' .remove').addEventListener('click', event => {
//     document.getElementsByClassName(timerID).remove();
//   })}

//  function resetItem (timerID) {
//     document.querySelector('.timer_'+timerID+' .reset').addEventListener('click', event => {
//     startTimer(timerID);
//   })}

//   function stopItem (timerID) {
//     document.querySelector('.timer_'+timerID+' .stop').addEventListener('click', event => {
//       alert('stop');
//       event.preventDefault()
//     })}

