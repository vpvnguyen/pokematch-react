import React, { Component } from 'react';
import './Message.css';

class Message extends Component {

    render() {
        return (
            <div className="container message-box text-center mt-5">
                <h3 className="mt-5 p-5">{this.props.message}</h3>
            </div >
        )
    }
}

export default Message;
