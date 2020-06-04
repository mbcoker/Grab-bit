import { createContext } from 'react';
//import actiontypes here
import { actionTypes } from './actions';

export const CategoryContext = createContext(null)

export const categoryState = {
  lastId: 3, // Change later
  categories: [{
    name: 'Makeup',
    id: 1,
    user_id: 1,
  },
  {
    name: 'Produce',
    id: 2,
    user_id: 1,
  },
]
}

export const categoriesReducer = (state, action) => {
  Object.freeze(state)
  let categories = [...state.categories]
  let lastId;
  
  switch(action.type) {
    
    case actionTypes.ADD_CATEGORY:
      lastId = state.lastId + 1;

      categories.push({
        name: action.payload.category,
        user_id: action.payload.currentUser,
        id: lastId,
      });
      return {
        ...state,
        categories,
        lastId,
      }

    default: 
    return state
  }
}
