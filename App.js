import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Categories from './components/Categories';
import { NavigationContainer } from 
import {
  CategoryContext, 
  categoriesReducer,
  categoryState,
} from './context/categoriesReducer';
import {
  ItemContext,
  itemsReducer,
  itemState,
} from './context/itemsReducer';

export default function App() {
  const [categories, dispatchCategories] = useReducer(
    categoriesReducer,
    categoryState,
  );
  
  const [items, dispatchToItems] = useReducer(
    itemsReducer, 
    itemState,
  );

  return (
    <CategoryContext.Provider value={[categories, dispatchCategories]}>
      <ItemContext.Provider value={[items, dispatchCategories]}>
        <Categories />
      </ItemContext.Provider>
    </CategoryContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
