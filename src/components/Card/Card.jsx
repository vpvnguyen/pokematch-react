import React, { Component } from 'react';

// styling
import Image from 'react-bootstrap/Image';
import './Card.css';

class Card extends Component {

    render() {
        return (
            <div>
                <Image
                    className="card"
                    src={this.props.image}
                    id={this.props.id}
                    key={this.props.id}
                    onClick={() => this.props.checkScore(this.props.id)}
                    alt={this.props.name}
                />
            </div>
        );
    }
}

export default Card;
