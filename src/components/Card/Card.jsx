import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

class Card extends Component {

    render() {
        return (
            <div>
                <Image
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
