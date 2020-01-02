import React from 'react';
import { render } from '@testing-library/react';

class Bomb extends React.Component {
    state = {
        count: 0,
        word: 'tick',
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ count: this.state.count +1 });
            if(this.state.count >= 8) {
                this.setState({ word: 'BOOM!!!' });
                clearInterval(this.interval);
            }
            else if(this.state.count % 2 === 0)
                this.setState({ word: 'tick' });
            else 
                this.setState({ word: 'tock' });
        }, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    };

    render() {
        return (
            <div>
                <p>{this.state.word}</p>
            </div>
        );
    }

}


export default Bomb;
