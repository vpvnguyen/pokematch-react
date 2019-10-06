import React, { Component } from 'react';

// react-scroll - ES6 Imports
import { animateScroll as scroll } from 'react-scroll';

// components
import Header from '../Header/Header.jsx';
import Message from '../Message/Message.jsx';
import Card from '../Card/Card.jsx';

// apis
import pokemonApi from '../../api/pokemon.api.js';

// componentDidMount() breaks if export default function
class Game extends Component {

    // default state
    state = {
        allCards: [],
        clicked: [],
        isLoading: true,
        message: 'Click on any card! Don\'t click on the same card twice!'
    };

    // When the component mounts, load cards to be displayed
    componentDidMount() {
        this.loadCards();
    };

    // get card data from pokemon api
    loadCards = () => {
        this.setState({ isLoading: true })
        console.log('loading cards...');
        pokemonApi.getBasicCards()
            .then(cardsData => {
                console.log(`setting state...
                ${cardsData}`);
                this.setState({
                    allCards: cardsData, isLoading: false
                });
            })
            .catch(err => console.log(`Error pokemonApi.getBasicCards(): ${err}`));
    };

    // check score based on card ID
    checkScore = cardID => {
        this.loadCards();

        // check if user has clicked this card
        if (this.state.clicked.includes(cardID)) {
            console.log(`Already Clicked: ${cardID}`);
            this.setState({ clicked: [], message: 'You already clicked that! Start over!' });
        } else {
            this.state.clicked.push(cardID);
            this.setState({ score: this.state.clicked.length, message: 'Naisu!' });
        }
    };

    // smooth scroll to the top
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <>
                <Header score={this.state.clicked.length} isLoading={this.state.isLoading} />

                {/* render out all pokemon cards as images */}
                <div className="container">

                    <div className="row">
                        <Message message={this.state.message} />
                    </div>

                    <div className="row">
                        {
                            this.state.allCards.map(card => (

                                <div className="col s3 mb-5" key={card.id}>
                                    <Card
                                        image={card.imageUrlHiRes}
                                        key={card.id}
                                        id={card.id}
                                        checkScore={this.checkScore}
                                        scrollTop={this.scrollToTop}
                                    />
                                </div>

                            ))
                        }
                    </div>

                </div>
            </>
        );
    }
}

export default Game;