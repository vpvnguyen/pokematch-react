import React, { Component } from 'react';

// components
import Header from '../Header/Header.jsx';
import Message from '../Message/Message.jsx';
import Card from '../Card/Card.jsx';

// styling
import { animateScroll as scroll } from 'react-scroll';
import { Animated } from 'react-animated-css';

// apis
import pokemonApi from '../../api/pokemon.api.js';

// componentDidMount() breaks if export default function
class Game extends Component {

    // default state
    state = {
        allCards: [],
        clicked: [],
        isLoading: true,
        navMessage: 'Loading Pokemon API...',
        message: 'Click on any card! Don\'t click on the same card twice!',
        animateIsCorrect: 'fadeOutUp',
        animateToggle: true
    };

    // When the component mounts, load cards to be displayed
    componentDidMount() {
        this.loadCards();
    };

    // get card data from pokemon api
    loadCards = () => {

        this.setState({
            isLoading: true
        });

        pokemonApi.getBasicCards()
            .then(cardsData => {
                this.setState({
                    allCards: cardsData,
                    isLoading: false,
                    animateIsCorrect: 'fadeOutUp',
                    animateToggle: true
                });
            })
            .catch(err => console.log(`Error pokemonApi.getBasicCards(): ${err}`));
    };

    // check score based on card ID
    checkScore = cardID => {

        // check if user has clicked this card
        if (this.state.clicked.includes(cardID)) {
            this.setState({
                clicked: [],
                message: 'You already clicked that! Start over!',
                animateIsCorrect: 'wobble',
                animateToggle: false
            });
        } else {
            this.state.clicked.push(cardID);
            this.setState({
                score: this.state.clicked.length,
                message: 'Naisu! Keep going!',
                animateToggle: false
            });
        }
        this.loadCards();
    };

    // smooth scroll to the top
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <>
                <Header
                    score={this.state.clicked.length}
                    isLoading={this.state.isLoading}
                    animateToggle={this.state.animateToggle}
                />

                {/* render out all pokemon cards as images to DOM */}
                <div className="container">

                    <div className="row">
                        <Message
                            message={this.state.message}
                            animateIsCorrect={this.state.animateIsCorrect}
                            animateToggle={this.state.animateToggle}
                        />
                    </div>

                    {/* map through array of objects and create card */}
                    <div className="row">
                        {
                            this.state.allCards.map(card => (

                                // if wrapped in a container, will lose cascading card style
                                <Animated className="col s3 mb-5" key={card.id} animationIn="bounceInDown"
                                    animationOut={this.state.animateIsCorrect}
                                    isVisible={this.state.animateToggle}>
                                    <Card
                                        image={card.imageUrlHiRes}
                                        key={card.id}
                                        id={card.id}
                                        checkScore={this.checkScore}
                                        scrollTop={this.scrollToTop}
                                    />
                                </Animated>

                            ))
                        }
                    </div>

                </div>
            </>
        );
    };
};

export default Game;