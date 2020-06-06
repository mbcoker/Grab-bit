import React, { useState, useContext } from 'react';
import {TextInput, View, Text, Button, Picker, StyleSheet} from 'react-native';
import { CategoryContext } from '../context/categoriesReducer';
import { ItemContext } from "../context/itemsReducer";
import { navigate } from '../utils/RootNavigation';
import { submitItem } from '../context/actions';

const ItemForm = ({route}) => {
  const { name, quantity, brand, category_id, id } = route.params;
  //dropdown with all cetegories
  //need access to categories and their ids to know which category the item belongs to
  const [{categories}, dispatchCategories] = useContext(
    CategoryContext
  );
  const [{items}, dispatchToItems] = useContext(
    ItemContext
  );

  let isNew = true;
  let oldId;
  let oldQuantity;
  let oldCategory_id = category_id;

  // Check if item is already in the store
  items.forEach(item => {
    // Check if items have the same name and brand
    if (item.name === name && item.brand === brand) {
      // Set the quantity, category_id, and id to be equal
      console.log('item:',item)
      isNew = false;
      oldId = item.id;
      oldQuantity = item.quantity;
      oldCategory_id = item.category_id;
    }
  });
  
  const [itemName, setItemName] = useState(name);
  const [itemQuantity, setItemQuantity] = useState(isNew ? quantity : oldQuantity);
  const [itemBrand, setItemBrand] = useState(brand);
  const [itemId, setItemId] = useState(isNew ? id : oldId);
  const [selectedValue, setSelectedValue] = useState(category_id || categories[0].id);


  const handleQuantity = (value) => {
    setItemQuantity(Math.max(itemQuantity + value, 0))
  }
  
  const handleSubmit = () => {
    dispatchToItems(submitItem({
      id: itemId,
      name: itemName,
      brand: itemBrand,
      quantity: itemQuantity,
      category_id: selectedValue,
    }));
    // Change to the selected category
    navigate('Categories')
  }

  const pickerItems = categories.map(category => {
    return (
      <Picker.Item label={category.name} value={category.id} key={category.id}/>
    )
  })

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setItemName(text)}
        value={itemName}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setItemBrand(text)}
        value={itemBrand}
      />
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(+itemValue)}
      >
        {pickerItems}
      </Picker>
      <Text>Quantity: {itemQuantity}</Text>
      <Button 
        title="+"
        onPress={() => handleQuantity(1)}
      />
      <Button 
        title="-"
        onPress={() => handleQuantity(-1)}
      />
      <Button 
        title={itemId === null ? 'ADD ITEM': 'UPDATE ITEM'}
        onPress={handleSubmit}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  
  input: {
    height: 40,
    fontSize: 30,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
  },
});

export default ItemForm;
