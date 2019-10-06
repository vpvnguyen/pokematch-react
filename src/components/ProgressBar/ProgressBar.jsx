import React, { Component } from 'react';
import './ProgressBar.css';

class ProgressBar extends Component {

    render() {

        // show loading bar depending on state
        if (!this.props.isLoading) {
            return null;
        } else {
            return (
                <div>
                    <div className="row">
                        <div id="progress" className="progress">
                            <div className="indeterminate"></div>
                        </div>
                    </div>
                </div>
            )
        };

    };
};

export default ProgressBar;