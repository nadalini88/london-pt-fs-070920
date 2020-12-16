/**
 * Exercise
 *
 * 1. create {User} class which receives {name},
 * {age}, {hunger}.
 *
 * 2. {User} should has {name}, {age} and {hunger} getters.
 *
 * 3. Add getter {foodConsumed} which returns {foodEaten}
 *
 * 4. {hungerStatus} should return a string:
 * base on hunger level {hunger} should return a string:
 * 0 - 20: "Famished"
 * 21 - 40: "Starving"
 * 41 - 60: "Hungry"
 * 61 - 80: "Content"
 * 81 - 100: "Full"
 *
 * 5. {hunger} should have setter.
 * Make sure you can't set {hunger} more than 100.
 *
 * 6. Add a method {eatFood}, which takes an object as an argument
 * (ex. {name:string; value: number;}) and add {value} to {hunger},
 * and food {name} store to {foodEaten}.
 * Make sure you can't set {hunger} more than 100.
 *
 * 7. Add setter {starveABit} which takes an argument(number),
 * 
 * and deduct from {hunger}.
 * If after deduction, hunger <= 0 return "You are dead".
 *
 * 8. If user is dead, make sure that on any method call you are getting
 * "User is dead"
 */



class User {
    constructor(name, age, hunger) {
        this.name = name;
        this.age = age;
        this.hunger = hunger;
        this.foodEaten = [];
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getHunger() {
        return this.hunger
    }
    getFoodEaten() {
        return this.foodEaten;
    }
    foodConsumed() {
        return this.foodEaten;
    }

    hungerStatus() {
        if(this.hunger <= 20){
           return "Famished";
        } else if (this.hunger <= 40){
            return "Starving";
        } else if ( this.hunger <= 60) {
            return "Hungry";
        } else if ( this.hunger <= 80){
            return "Content";
        } else {
            return "Full";
        }
    }

    eatFood(food) {
        this.foodEaten.push(food.name)
        if(this.hunger+food.value <= 100){
            this.hunger += food.value;
        } else {
            this.hunger = 100;
        }
    }

    setHunger(newHunger) {
        this.hunger = newHunger > 100 ?  100 : newHunger 
    }













    starveABit(number) {
        this.hunger -= number
        if (this.hunger <= 0) {
            return "You are dead"
        }
    }
}

const person = new User("John", 35, 0);
// var st = person.hungerStatus();
// console.log(st)