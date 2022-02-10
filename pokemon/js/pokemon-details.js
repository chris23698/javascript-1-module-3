console.log(document.location.search);

const queryString = document.location.search;

//in order to get the value
const params = new URLSearchParams(queryString)

console.log(params);
console.log(params.get("name")); // this will be the pokemon name


const pokemonName = params.get("name");

const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

console.log(API_URL);

// select my container class .pokemon-details

const pokemonDetails = document.querySelector(".pokemon-details");

async function getPokemonDetails(){
    try {
        const response = await fetch(API_URL);
        const singlePokemonDetails = await response.json();
        console.log("singlePokemonDetails: ", singlePokemonDetails);
        const pokemonWeight = singlePokemonDetails.weight; // get the weight of pokemon
        console.log(pokemonWeight);
        pokemonDetails.innerHTML = `<li>The Pokemon weight is : ${pokemonWeight}</li>`;

    }
    catch (error){ 
        console.log(error);
    }
}
getPokemonDetails()