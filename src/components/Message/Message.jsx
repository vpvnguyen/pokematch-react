import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Message extends Component {

    render() {
        return (
            <Jumbotron className="text-center">
                <h3 className="mt-5">{this.props.message}</h3>
            </Jumbotron >
        )
    }
}

export default Message;
