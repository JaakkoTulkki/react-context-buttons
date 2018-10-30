import React from 'react';
import {CounterContext, counterContextReducer} from "./store/counter"
import {Buttons} from "./Buttons"

export class CounterApp extends React.Component {
  state = {
    counter: counterContextReducer(),
  }

  render() {
    const counter = {
      value: this.state.counter,
      increaseCounter: () => this.setState(state => ({
        counter: counterContextReducer(state.counter, {type: 'inc'}),
      }), () => console.log('inc')),
      decreaseCounter: () => this.setState(state => ({
        counter: counterContextReducer(state.counter, {type: 'dec'}),
      }), () => console.log('dec')),
    }

    return <CounterContext.Provider value={counter}>
      <Buttons />
    </CounterContext.Provider>
  }
}

