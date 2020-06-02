import React from 'react';
import { View, Text } from 'react-native';

const Category = ({name, id}) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default Category
