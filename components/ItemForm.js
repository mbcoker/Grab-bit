import React, { useState } from 'react';
import {TextInput, View, Text} from 'react-native';
import { Dropdown } from "react-native-material-dropdown";
import { CategoryContext } from '../context/categoriesReducer';
import { navigate } from '../utils/RootNavigation';

const ItemForm = ({ name, quantity, brand, onList, category_id }) => {
  //dropdown with all cetegories
  //need access to categories and their ids to know which category the item belongs to
  const [{categories}, dispatchCategories] = useContext(
    CategoryContext
  );
  const [name, setName] = useState(name);
  const [quantity, setQuantity] = useState(quantity);
  const [brand, setBrand] = useState(brand);

  const handleQuantity = (value) => {
    setQuantity(quantity + value)
  }

  return (
    <View>
      <TextInput
        value={name}
      />
      <Dropdown
        title="Category"
        data={data}
      />
      <TextInput 
        value={quantity}
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
    </View>
  )
};

export default ItemForm;
