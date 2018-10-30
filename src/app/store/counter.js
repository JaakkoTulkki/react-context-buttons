import React from 'react';

export function counterContextReducer(state = 0, action={}) {
  if(action.type === 'inc') state += 1;
  if(action.type === 'dec') state -= 1;
  return state;
}

export const CounterContext = React.createContext(counterContextReducer())
