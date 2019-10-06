import axios from "axios";

// export an object for accessing the pokemon API
const getPokemon = {

    pokemonApiRoute: 'https://api.pokemontcg.io/v1/cards',

    getBasicCards: function () {
        return axios.get(this.pokemonApiRoute)
            .then(function (pokemonData) {
                const pokemonCards = pokemonData.data.cards;
                return getPokemon.shuffle(pokemonCards.filter(function (pokemonBasicResponse) { return pokemonBasicResponse.subtype === 'Basic' }));
            })
            .catch(function (err) {
                if (err) throw err;
            });
    },

    shuffle: function (array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
}

export default getPokemon;