// MY POINT
// https://pokeapi.co/api/v2/pokemon?offset=20&limit=40
const APIUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=40";

// Select the Pokémon class container
const pokemonsContainer = document.querySelector(".my-pokemons"); // ul with class pokemons

async function getPokemonNames() {
    try {
        const response = await fetch(APIUrl);
        const responseJSON = await response.json(); // convert the response to json data
        console.log(responseJSON);
        const pokemonsData = responseJSON.results;
        console.log(pokemonsData);
        pokemonsContainer.innerHTML = "";
        for (let i = 0; i < pokemonsData.length; i++) {
            console.log(pokemonsData[i]);
            pokemonsContainer.innerHTML += `<li><span><a href="pokemon-details.html?name=${pokemonsData[i].name}">${pokemonsData[i].name}</a></span></li>`
        }

    } catch (error) {
        console.log("Some error happened :(", error);
        pokemonsContainer.innerHTML = `<li><span>sorry some error happened :(</span></li>`

    }
}

getPokemonNames();