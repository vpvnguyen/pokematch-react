import React, { Component } from 'react';

// styling
import Image from 'react-bootstrap/Image';
import './Card.css';

class Card extends Component {

    render() {
        return (
            <>
                <Image
                    className="card"
                    src={this.props.image}
                    id={this.props.id}
                    key={this.props.id}
                    onClick={() => {
                        this.props.checkScore(this.props.id);
                        this.props.scrollTop();
                    }}
                    alt={this.props.name}
                />
            </>
        );
    };
};

export default Card;
