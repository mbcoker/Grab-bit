import React, { useContext, useEffect } from 'react';
import Category from './Category';
import { CategoryContext } from '../context/categoriesReducer';
import { StyleSheet, Text, View } from 'react-native';
const Categories = ({ navigation }) => {
  const [{ categories }, dispatchCategories] = useContext(CategoryContext);
  
  const renderCategories = () => {
    return categories.map((category) => {
      return (
        <Category key={category.id} {...category} navigation={navigation} />
      );
    });
  };

  return (
    <View>
      <Text>Categories</Text>
      <View>{renderCategories()}</View>
    </View>
  );
};

export default Categories;
