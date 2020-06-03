import React, { useContext } from 'react';
import { ItemContext } from '../context/itemsReducer';
import { StyleSheet, Text, View } from 'react-native';
import Item from './Item';

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
    </View>
  )
};

export default Items;
