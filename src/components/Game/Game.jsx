import React, { Component } from 'react';
import Card from '../Card/Card.jsx';
import pokemonApi from '../../api/pokemon.api.js';

// componentDidMount() breaks if export default function
class Game extends Component {
    state = {
        search: "",
        breeds: [],
        results: [],
        error: ""
    };

    // When the component mounts, load the next dog to be displayed
    componentDidMount() {
        this.loadCards()
    }

    loadCards = () => {
        console.log('hi');
        pokemonApi.getBasicCards()
            .then(res => {
                console.log('setting state')
                console.log(res)
                this.setState({
                    images: res.imageUrl
                });
            })
            .catch(err => console.log(`Error pokemonApi.getBasicCards(): ${err}`))
    };

    handleInputChange = event => {
        //   this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        //   event.preventDefault();
        //   API.getDogsOfBreed(this.state.search)
        //     .then(res => {
        //       if (res.data.status === "error") {
        //         throw new Error(res.data.message);
        //       }
        //       this.setState({ results: res.data.message, error: "" });
        //     })
        //     .catch(err => this.setState({ error: err.message }));
    };

    render() {
        return (
            <div>
                {/* <Container style={{ minHeight: "80%" }}>
            <h1 className="text-center">Search By Breed!</h1>
            <Alert
              type="danger"
              style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
            >
              {this.state.error}
            </Alert>
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              breeds={this.state.breeds}
            />
            <SearchResults results={this.state.results} />
          </Container> */}
                <Card />
            </div>
        );
    }
}

export default Game;

