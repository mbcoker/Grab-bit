import { createContext } from 'react';
//import action types here
export const ItemContext = createContext(null)

export const itemState = {
  items: []
}

const createItem = () => {
  return
}

export const itemsReducer = (state, action) => {
  Object.freeze(state)
  let items = [...state.items]

  switch(action.type) {
    default: 
    return state
  }
}
