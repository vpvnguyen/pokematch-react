import React, { Component } from 'react';
import Card from '../Card/Card.jsx';
import pokemonApi from '../../api/pokemon.api.js';

// componentDidMount() breaks if export default function
class Game extends Component {
    state = {
        allCards: [],
        clicked: [],
        score: 1
    };

    // When the component mounts, load cards to be displayed
    componentDidMount() {
        this.loadCards();
    }

    loadCards = () => {
        console.log('loading cards...');
        pokemonApi.getBasicCards()
            .then(res => {
                console.log('setting state...');
                console.log(res);
                this.setState({
                    allCards: res
                });
            })
            .catch(err => console.log(`Error pokemonApi.getBasicCards(): ${err}`));
    };

    // pass into Card to check score onclick
    checkScore = cardID => {
        console.log(`Card ID: ${cardID}`);

        // check if user has clicked this card
        if (this.state.clicked.includes(cardID)) {
            console.log(`Already Clicked: ${cardID}`);
        } else {
            this.state.clicked.push(cardID);
            this.setState({ score: this.state.score + 1 });
        }
        this.loadCards();
        console.log(this.state.clicked);
        console.log(this.state.score);

    }

    render() {
        return (
            <div>
                {/* render out all pokemon cards as images */}
                {this.state.allCards.map(card => (
                    <Card
                        image={card.imageUrl}
                        key={card.id}
                        id={card.id}
                        checkScore={this.checkScore}
                    />
                ))}


            </div>
        );
    }
}

export default Game;

