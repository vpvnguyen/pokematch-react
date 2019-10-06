import React, { Component } from 'react';

// styling
import { Animated } from "react-animated-css";
import './Message.css';

class Message extends Component {

    render() {
        return (
            <div className="container message-box text-center mt-5 pb-4">

                <Animated animationIn="bounceInDown"
                    animationOut={this.props.animateIsCorrect}
                    isVisible={this.props.animateToggle}>

                    <h3 className="mt-5 p-5">
                        {!this.props.isLoading ? this.props.message : 'Loading Pokemon API...'}
                    </h3>

                </Animated>

            </div>
        );
    };
};

export default Message;
