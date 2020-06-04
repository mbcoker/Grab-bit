import React, { useState, useContext } from 'react';
import {TextInput, View, Text, Button, Picker} from 'react-native';
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
  const [itemName, setItemName] = useState(name);
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [itemBrand, setItemBrand] = useState(brand);
  const [selectedValue, setSelectedValue] = useState(category_id || categories[0].id);


  const handleQuantity = (value) => {
    setItemQuantity(Math.max(itemQuantity + value, 0))
  }
  
  const handleSubmit = () => {
    console.log('selected value:', selectedValue)
    console.log('categories:', categories)
    dispatchToItems(submitItem({
      id,
      name: itemName,
      brand: itemBrand,
      quantity: itemQuantity,
      category_id: +selectedValue,
    }));
    // Change to the selected category
    navigate('Items',{category_id})
  }

  const pickerItems = categories.map(category => {
    return (
      <Picker.Item label={category.name} value={category.id} key={category.id}/>
    )
  })

  return (
    <View>
      <TextInput
        onChangeText={(text) => setItemName(text)}
        value={itemName}
      />
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {pickerItems}
      </Picker>
      <TextInput
        onChangeText={(text) => setItemBrand(text)}
        value={itemBrand}
      />
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
        title={id === null ? 'ADD ITEM': 'UPDATE ITEM'}
        onPress={handleSubmit}
      />
    </View>
  )
};

export default ItemForm;
