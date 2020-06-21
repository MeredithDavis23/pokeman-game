// require('dotenv').config()

window.onload = function() {
    //   getCharacter();
    
    }
//an empty array for the characters to get pushed into from the API
pokemon = [];
//Pokemon stat = pokemon[0].stats[1].base_stat    <-----attack

//pulls random first character from API and appends it into an li element as well 
//as the picture for the character
const getPokemonLeft = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then(data => {
        let random = Math.floor(Math.random()*20);
        return fetch(data.results[random].url)
    })
    .then(res => res.json())
    .then(data => {
        pokemon.push(data)
        console.log(pokemon);
    })
    .then(data => {
        pokemonData = data;
        const left = document.getElementById("left");
        const li = document.createElement("li");
        const pic = document.createElement("img");
        pic.setAttribute("src", `${pokemon[0].sprites.front_default}`);
        li.appendChild(document.createTextNode(pokemon[0].species.name));
        li.appendChild(pic);
        left.append(li)
    })
}
//pulls random second character from API and appends it into an li element as well 
//as the picture for the character
const getPokemonRight = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then(data => {
        let random = Math.floor(Math.random()*20);
        return fetch(data.results[random].url)
    })
    .then(res => res.json())
    .then(data => {
        pokemon.push(data)
        console.log(pokemon);
    })
    .then(data => {
        pokemonData = data;
        const left = document.getElementById("right");
        const li = document.createElement("li");
        const pic = document.createElement("img");
        pic.setAttribute("src", `${pokemon[1].sprites.front_default}`);
        li.appendChild(document.createTextNode(pokemon[1].species.name));
        li.appendChild(pic);
        left.append(li)
    })
}

//this determines a winner based on who has the higher stats. Appends winner into li element 
const battle = () => {
    
    if ((pokemon[0].stats[1].base_stat) > (pokemon[1].stats[1].base_stat)) {
        winner = pokemon[0].species.name
    }
    else {
        winner = pokemon[1].species.name
    }
    const ul = document.getElementById('battleResults');
    const li = document.createElement('li');
    const text = document.createTextNode(`${winner} wins!`);
    li.appendChild(text);
    ul.append(li);
}
//This reset button will eliminate the players and the winner. Currently have not 
//reset and randomized characters, but it is not part of the assignment
const reset = () => {
    document.getElementById("right").innerHTML = null;
    document.getElementById("left").innerHTML = null;
    document.getElementById("battleResults").innerHTML = "";
  }