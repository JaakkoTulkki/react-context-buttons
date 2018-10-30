import React from 'react';
import {CounterContext} from "./store/counter"

const btnStyles = {
    'background-color': 'lightblue',
    'height': '2rem',
    'width': '4rem',
    'font-size': '1rem',
    'margin': '0 3px',
}

export const Buttons = () =>
  <CounterContext.Consumer>
    {counter => <div>
      <div>{counter.value}</div>
      <button style={btnStyles} onClick={counter.increaseCounter}>inc</button>
      <button style={btnStyles} onClick={counter.decreaseCounter}>dec</button>
      </div>}
  </CounterContext.Consumer>
