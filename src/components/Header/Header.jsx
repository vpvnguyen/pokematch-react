import React, { Component } from 'react';

// components
import Score from '../Score/Score.jsx';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';

// styling
import Navbar from 'react-bootstrap/Navbar';
import { Animated } from 'react-animated-css';

class Header extends Component {

    render() {
        return (
            <>
                <Navbar className="fixed-top" bg="dark" variant="dark">

                    <Animated className="container" animationIn="bounceInLeft" animationOut="flash"
                        isVisible={this.props.animateToggle}>

                        <Navbar.Brand href="https://github.com/vpvnguyen/pokematch-react" target="_blank">{this.props.isLoading ? 'Loading Pokemon API' : 'PokéMatch'}</Navbar.Brand>

                        <Score score={this.props.score} />

                    </Animated>

                </Navbar >

                <div className="fixed-top container mt-5">
                    <ProgressBar isLoading={this.props.isLoading} />
                </div>
            </>
        );
    };
};

export default Header;