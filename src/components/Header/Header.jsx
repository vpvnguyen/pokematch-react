import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Score from '../Score/Score.jsx';

class Header extends Component {
    render() {

        return (
            <Navbar className="fixed-top" bg="dark" variant="dark">
                <div className="container">
                    <Navbar.Brand href="#home">PokeMatch</Navbar.Brand>
                    <Score score={this.props.score} />
                </div>
            </Navbar >
        )
    }
}

export default Header;