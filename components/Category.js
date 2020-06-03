import React from 'react';
import { View, Text, Button } from 'react-native';

const Category = ({navigation, name, id}) => {
  return (
    <View>
      <Button
        title={name}
        onPress={()=>{
          navigation.navigate('Items', {category_id: id, navigation});
        }}
      />
    </View>
  )
}

export default Category
