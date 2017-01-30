import React, { Component } from 'react';
import './ElleButton.css';

class ElleButton extends Component {
    constructor(){
        super();
        this.state = {
            hearts: 5
        }
    }

    tenHearts = () => {
        const currentHearts = this.state.hearts;
        if (currentHearts == 10) {
            this.setState({
                hearts: 5
            });
        } else {
            this.setState({
                hearts: 10
            });
        }
    }

    addHeart = () => {
        // Els's code goes here!
    }

    render() {
        const hearts = '❤️'.repeat(this.state.hearts);
        return(
            <div>
                <button onClick={this.tenHearts}>Click Me!</button>
                <p>{hearts}</p>
            </div>
        );
    }
}

export default ElleButton;