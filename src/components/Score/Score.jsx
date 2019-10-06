import React, { Component } from 'react';
import './Score.css';

class Score extends Component {

    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarText">
                <span id="score" className="ml-auto">
                    Score: {this.props.score}
                </span>
            </div>
        )
    }
}

export default Score;