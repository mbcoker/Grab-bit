import React, { useContext } from 'react';
import Category from './Category';
import { CategoryContext } from '../context/categoriesReducer';
import { StyleSheet, Text, View } from 'react-native';
const Categories = () => {
  const [{categories}, dispatchCategories] = useContext(
    CategoryContext
  );

  const renderCategories = () => {
    return categories.map(category => {
     return <Category {...category} key={category.id}/>
    })
  }

  return (
    <View>
      <Text>Categories</Text>
      <View>
        {renderCategories()}
      </View>
    </View>
  );
};

export default Categories;
