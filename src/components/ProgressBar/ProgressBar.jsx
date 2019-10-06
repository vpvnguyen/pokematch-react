import React, { Component } from 'react';
import './ProgressBar.css';

class ProgressBar extends Component {


    render() {
        console.log(this.props.isLoading)
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
        }

    }
}

export default ProgressBar;