import React from 'react';
import { render } from '@testing-library/react';

class RouletteGun extends React.Component {

    state = {
        bulletInChamber: this.props.bulletInChamber,
        chamber: null,
        spinningTheChamber: false,
    }

    handleClick = () => {
        this.setState({spinningTheChamber: true})
        this.timeout = setTimeout( () => {
            let rand = Math.ceil(Math.random() * 8);
            this.setState({
                chamber: rand,
                spinningTheChamber: false
            });
        }, 2000);
    };

    componentWillUnmount(){
        clearTimeout(this.timeout);
    }
    
    render() {
        if(this.state.spinningTheChamber === true) {
            return (
                <div> 
                    <p>spinning the chamber and pulling the trigger! ...</p>
                </div>
            );
        }
        else if(this.state.chamber === this.state.bulletInChamber) {
            return (
                <div> 
                    <p>BANG!!!</p>
                    <button onClick={this.handleClick}>Pull the trigger!</button>
                </div>
            );
        }
        else {
            return (
                <div> 
                    <p>You're safe!</p>
                    <button onClick={this.handleClick}>Pull the trigger!</button>
                </div>
            );
        }
    }
}

export default RouletteGun;