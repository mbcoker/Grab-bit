import React, { useState, useContext } from 'react';
import {TextInput, View, Text, Button, Picker} from 'react-native';
import { CategoryContext } from '../context/categoriesReducer';
import { navigate } from '../utils/RootNavigation';

const ItemForm = ({route}) => {
  const { name, quantity, brand, onList, category_id } = route.params;
  //dropdown with all cetegories
  //need access to categories and their ids to know which category the item belongs to
  const [{categories}, dispatchCategories] = useContext(
    CategoryContext
  );
  const [itemName, setItemName] = useState(name);
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [itemBrand, setItemBrand] = useState(brand);
  const [selectedValue, setSelectedValue] = useState(category_id || 'none');


  const handleQuantity = (value) => {
    setItemQuantity(Math.max(itemQuantity + value, 0))
  }
  
  const handleSubmit = () => {
    
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
        value={name}
      />
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="None Selected" value={'none'} />
        {pickerItems}
      </Picker>
      <TextInput
        onChangeText={(text) => setItemBrand(text)}
        value={brand}
      />
      <Text>Quantity</Text>
      <Button 
        title="+"
        onPress={() => handleQuantity(1)}
      />
      <Button 
        title="-"
        onPress={() => handleQuantity(-1)}
      />
      <Button 
        title='ADD'
        onPress={handleSubmit}
      />
    </View>
  )
};

export default ItemForm;
