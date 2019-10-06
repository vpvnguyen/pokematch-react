import React, { Component } from 'react';

class Score extends Component {

    render() {
        return (
            <div class="collapse navbar-collapse" id="navbarText">
                <span class="navbar-text ml-auto">
                    Score: {this.props.score}
                </span>
            </div>
        )
    }
}

export default Score;