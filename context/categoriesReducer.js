import { createContext } from 'react';
//import actiontypes here

export const CategoryContext = createContext(null)

export const categoryState = {
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

const createCategory = () => {
  return
}

export const categoriesReducer = (state, action) => {
  Object.freeze(state)
  let categories = [...state.categories]

  switch(action.type) {
    default: 
    return state
  }
}
