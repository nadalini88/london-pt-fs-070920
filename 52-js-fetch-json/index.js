const button = document.querySelector("button");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// URL: https://cat-fact.herokuapp.com/facts

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve` in this directory

/**
 * Exercise 1
 *
 * create a function {fetchData} which takes
 * a URL as an argument and sends a GET request.
 * When you get a response, return an array of facts.
 */
const fetchData = async (url) => {
    const result = await fetch(url);
    const json = await result.json();
    return json;
}
/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. click on a button "Get random facts"
 * 2. view 3 random facts in ".result" element
 */

const getFromAPI = async () => { 
    const results = await fetchData("https://cat-fact.herokuapp.com/facts");
    const length = results.all.length;
    const noFacts = 3;

    result.innerHTML = '';
    for (let i = 0; i < noFacts; i++) {
        var random = Math.floor(Math.random() * length);
        var fact = results.all[random];
        result.innerHTML += `
        <li>
            <p class="fact">${fact.text}</p>
            <p class="author">${fact.user.name.first} ${fact.user.name.last}</p>
        </li> `;
    }
}

button.addEventListener("click", function(){
    getFromAPI();
});