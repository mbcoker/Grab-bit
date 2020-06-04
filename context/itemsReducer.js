import { createContext } from 'react';
//import action types here
export const ItemContext = createContext(null)

export const itemState = {
  items: [{
    name: 'lipstick',
    brand: 'mac',
    category_id: 1,
    quantity: 1,
    notes: 'these are some short notes about my item',
    id: 1
  },
  {
    name: 'apple',
    brand: 'figi',
    category_id: 2,
    quantity: 1,
    notes: 'these are some short notes about my item',
    id: 2,
  },
  {
    name: 'gloss',
    brand: 'gloss company',
    category_id: 1,
    quantity: 1,
    notes: 'these are some short notes about my item',
    id: 3,
  },
  ]
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
