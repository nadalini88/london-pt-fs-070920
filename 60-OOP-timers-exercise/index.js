/**
 * Exercise 1
 *
 * create a class {Timer} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
 */


class Timer {
    constructor(number) {
        this.timer = document.createElement(`div`);
        this.timer.classList.add('timer', 'timer_' + number);

        this.timer.innerHTML = `
            <div class="remove"></div>
            <h3>0 <span>00</span></h3>
            <div class="btn">
                <button class="reset">Reset</button>
                <button class="stop">Stop</button>
            </div>
        `;
        this.stopBtn = this.timer.querySelector('.stop')
        this.resetBtn = this.timer.querySelector('.reset')
        this.removeItem = this.timer.querySelector('.remove')
        this.counter = 0;
        this.createInterval = () => {
            return setInterval(() => {
                this.counter++;
                const s = Math.floor(this.counter / 100);
                const ms = this.counter % 100
                const h3 = this.timer.querySelector('h3')
                h3.innerHTML = `${s} <span>${ms}</span>`
            }, 10)
        }
        this.stopBtn.addEventListener('click', () => {
            clearInterval(this.interval)
        })
        this.resetBtn.addEventListener('click', () => {
            clearInterval(this.interval)
            this.interval = this.createInterval();
        })
        this.removeItem.addEventListener('click',() =>{
        
            clearInterval(this.interval);
            timer.remove();
        })
        document.body.appendChild(this.timer);
        this.interval = this.createInterval();
    }
}





const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");


let timersCount = 0;

addCounterEl.addEventListener('click', () => {
    const avalaibleTimers = document.querySelectorAll('.timer');

    if (avalaibleTimers.length < 5) {
        timersCount++;
        new Timer(timersCount);
    }
});