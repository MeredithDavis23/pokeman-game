// require('dotenv').config()

window.onload = function() {
    //   getCharacter();
    
    }

pokemon = [];
//Pokemon stat = pokemon[0].stats[1].base_stat    <-----attack

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
        const pokemonData = data;
        const left = document.getElementById("left");
        const li = document.createElement("li");
        const pic = document.createElement("img");
        pic.setAttribute("img", `${pokemon[0].sprites.front_default}`);
        li.appendChild(document.createTextNode(pokemon[0].species.name));
        li.appendChild(pic);
        left.append(li)
    })
}

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


    //     const pokemonData = data.results;
    //     const right = document.getElementById("right");
    //     pokemonData.map(character => {
    //         const li = document.createElement("li");
    //         li.appendChild(document.createTextNode(character.name))
    //         right.append(li)
    //     })
    // })
}

const battle = () => {
    
}
