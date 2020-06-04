import { createContext } from 'react';
import { actionTypes } from './actions';
//import action types here
export const ItemContext = createContext(null)

export const itemState = {
  lastId: 3,
  items: [{
    name: 'lipstick',
    brand: 'mac',
    quantity: 1,
    category_id: 1,
    quantity: 1,
    notes: 'these are some short notes about my item',
    id: 1
  },
  {
    name: 'apple',
    brand: 'figi',
    quantity: 5,
    category_id: 2,
    quantity: 1,
    notes: 'these are some short notes about my item',
    id: 2,
  },
  {
    name: 'gloss',
    brand: 'gloss company',
    quantity: 0,
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
  let lastId;

  switch(action.type) {
    case actionTypes.SUBMIT_ITEM:
      const { name, brand, quantity, category_id } = action.payload;
      lastId = state.lastId + 1;

      // Remove original item information if new item is the same item
      
      const item = {
        name,
        brand,
        quantity,
        category_id,
        id: lastId,
      }

      console.log(item)

      items.push(item);
      
      return {
        ...state,
        items,
        lastId,
      }

    default: 
    return state
  }
}
