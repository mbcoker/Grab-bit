import React, { useContext, useState } from 'react';
import Category from './Category';
import { CategoryContext } from '../context/categoriesReducer';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { addCategory } from '../context/actions';

const Categories = ({navigation}) => {
  const [{categories}, dispatchCategories] = useContext(
    CategoryContext
  );
  
  const [categoryName, setCategoryName] = useState('')
  const [toggle, setToggle] = useState(false)

  const handleSubmit = () => {
    // handle reducer
    
    //make post request

    // clear form
    dispatchCategories(addCategory(categoryName, 1))
    setCategoryName('')
    handleToggle()
  }

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const renderInput = () => {
    if(toggle) {
      return (
        <View>
          <TextInput 
            onChangeText={(text) => setCategoryName(text)}
            value={categoryName}
          />
          <Button 
            title='+'
            onPress={handleSubmit}
          />
        </View>
      )
    }
  }


  const renderCategories = () => {
    return categories.map((category) => {
      return (
        <Category key={category.id} {...category} navigation={navigation} />
      );
    });
  };

  return (
    <View>
      <View>
        {renderInput()}
      </View>
      <Text>Categories</Text>
      <View>
        {renderCategories()}
      </View>
      <Button
        title={toggle ? 'cancel' : 'add'}
        onPress={handleToggle}
      />
    </View>
  );
};

export default Categories;
