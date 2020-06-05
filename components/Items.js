import React, { useContext } from 'react';
import { ItemContext } from '../context/itemsReducer';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Item from './Item';
import { navigate } from "../utils/RootNavigation";
import { Button} from 'react-native-elements';

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
    <ScrollView>
      {itemList}
      <Button
        title="+"
        onPress={()=>{
          navigate('ItemForm', {
            name: '',
            brand: '',
            quantity: 0,
            category_id,
            id: null,
          });
        }}
      />
    </ScrollView>
  )
};

export default Items;
