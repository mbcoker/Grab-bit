import React, { useContext } from 'react';
import { CategoryContext } from '../context/categoriesReducer';
import { StyleSheet, Text, View } from 'react-native';

const ItemShow = ({ route }) => {
  const { name, brand } = route.params
  return (
    <View>
      <Text>product: {name}</Text>
      <Text>brand: {brand}</Text>
    </View>
  )
}

export default ItemShow
