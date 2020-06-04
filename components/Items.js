import React, { useContext } from 'react';
import { ItemContext } from '../context/itemsReducer';
import { StyleSheet, Text, View, Button } from 'react-native';
import Item from './Item';
import { navigate } from "../utils/RootNavigation";

const Items = ({ route, navigation }) => {
  const [{items}, dispatchItems] = useContext(
    ItemContext
  );
  const { category_id } = route.params
  const itemList = items.filter(item => {
    return item.category_id === category_id;
  })
    .map(item => {
      return (
        <Item
          key={item.id}
          {...item}
          navigation={navigation}
        />
      );
    });

  return (
    <View>
      <Text>Items</Text>
      {itemList}
      <Button
        title="add"
        onPress={()=>{
          navigate('ItemForm', {
            name: '',
            brand: '',
            quantity: 0,
            onList: false,
            category_id,
          });
        }}
      />
    </View>
  )
};

export default Items;
