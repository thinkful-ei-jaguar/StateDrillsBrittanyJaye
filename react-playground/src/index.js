import React from 'react';
import ReactDOM from 'react-dom';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun.js';
import App from './App';
import Accordion from './state-drills/Accordion'
import './index.css';

ReactDOM.render(<Accordion 
    sections = {[
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
      ]}
    />, document.getElementById('root'));