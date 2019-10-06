import React, { Component } from 'react';

// components
import Header from '../Header/Header.jsx';
import Message from '../Message/Message.jsx';
import Score from '../Score/Score.jsx';
import Card from '../Card/Card.jsx';

// apis
import pokemonApi from '../../api/pokemon.api.js';

// componentDidMount() breaks if export default function
class Game extends Component {

    state = {
        allCards: [],
        clicked: [],
        message: 'Click on any card! Don\'t click on the same card twice!'
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
        this.loadCards();
        console.log('SCORE' + this.state.clicked.length);

        // check if user has clicked this card
        if (this.state.clicked.includes(cardID)) {
            console.log(`Already Clicked: ${cardID}`);
            this.setState({ message: 'You already clicked that!' });
        } else {
            this.state.clicked.push(cardID);
            this.setState({ score: this.state.clicked.length });
            this.setState({ message: 'Naisu!' });
        }
        console.log(this.state.clicked);
        console.log(this.state.clicked.length);

    }

    render() {
        return (
            <div>
                <Header score={this.state.clicked.length} />
                <Message message={this.state.message} />
                <Score score={this.state.clicked.length} />
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

