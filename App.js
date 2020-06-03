import 'react-native-gesture-handler';
import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Categories from './components/Categories';
import Items from './components/Items';
import ItemShow from './components/ItemShow';
import Navbar from './components/Navbar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './components/RootNavigation';

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

const Stack = createStackNavigator();

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
    <NavigationContainer ref={navigationRef} >
      <CategoryContext.Provider value={[categories, dispatchCategories]}>
        <ItemContext.Provider value={[items, dispatchCategories]}>
          <Stack.Navigator>
            <Stack.Screen
              name='Categories'
              component={Categories}
            />
            <Stack.Screen
              name='Items'
              component={Items}
            />
            <Stack.Screen
              name='ItemShow'
              component={ItemShow}
            />
          </Stack.Navigator>
          <Navbar />
          {/* <Categories /> */}
        </ItemContext.Provider>
      </CategoryContext.Provider>
    </NavigationContainer>
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
