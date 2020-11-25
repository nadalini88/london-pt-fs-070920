const resultEl = document.querySelector(".result");
const searchEl = document.querySelector("input");
const houseURL = "v";

// STORE YOUR SWORN MEMBERS IN {members}
let members = [];
// =============================


/**
 * 
 * REQUIREMENTS:
 * 
 * 1. I should be able to see all {swornMembers}
 * after the page has loaded.
 * 2. When I type a query inside the input it should only
 * display members whose name includes the query
 */
const swornMembers = async () => {
    const resposta = await fetch('https://anapioficeandfire.com/api/houses/378');
    const dados = await resposta.json()
    return dados
}
 /** 
  * HTML for each member: 
  * <li>
  *     <p class="name">Bilbo Baggins</p>
  *     <p class="life">1777 – 1888</p>
  *     <p class="gender"><strong>Gender: </strong>Male</p>
  *     <p class="culture"><strong>Culture: </strong>Hobbit</p>
  * </li>
 */

