import React from 'react';
import { render } from '@testing-library/react';


class Accordion extends React.Component {
    static defaultProps = {
        sections: []
      };

    state = {
        index: null,
    }

    render() {
        return(
            <ul>
                {this.props.sections.map(e => {
                    let place = this.props.sections.indexOf(e);
                    if(this.state.index === place) {
                        return (
                            <li key = {place}>
                                <button onClick={() => this.setState({ index: place })}>{e.title}</button>
                                <p>{e.content}</p>
                            </li>
                        );
                    }
                    else {
                        return (
                            <li key = {place}>
                            <button onClick={() => this.setState({ index: place })}>{e.title}</button>
                            </li>  
                        );
                    }
                })}
            </ul>
        );
    }
}

export default Accordion;