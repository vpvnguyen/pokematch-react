import React, { Component } from 'react';

class Score extends Component {

    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarText">
                <span className="navbar-text ml-auto">
                    Score: {this.props.score}
                </span>
            </div>
        )
    }
}

export default Score;