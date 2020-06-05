import React, { useContext, useState } from 'react';
import Category from './Category';
import { CategoryContext } from '../context/categoriesReducer';
import { StyleSheet, Text, ScrollView, View, TextInput} from 'react-native';
import { addCategory } from '../context/actions';
import { MaterialIcons } from '@expo/vector-icons';
import { Button} from 'react-native-elements';

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

  const renderInputButton = () => {
    if(toggle) {
      return <Button onPress={handleToggle} icon={<MaterialIcons name="cancel" size={24} color="white" onPress={handleToggle}/>} />
      // return <MaterialIcons name="cancel" size={24} color="black" onPress={handleToggle}/>
    } else {
      return <Button
      title="+"
      onPress={handleToggle}
    />
      // return <MaterialIcons name="add" size={24} color="black" onPress={handleToggle}/>
    }
  }

  const renderInput = () => {
    if(toggle) {
      return (
        <View>
          <View style={styles.inputContainer}>
            <TextInput 
              placeholder={"Add Category"}
              style={styles.input}
              onChangeText={(text) => setCategoryName(text)}
              value={categoryName}
            />
          </View>
          <Button 
            title='Save'
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
    <ScrollView>
      <View>
        {renderInput()}
      </View>
      {/* <Button
        style={toggle ? styles.cancel : styles.add}
        title={toggle ? 'cancel' : '+'}
        onPress={handleToggle}
      /> */}
      <View>
        {renderCategories()}
      </View>
      <View >
        {renderInputButton()}
      </View>
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  inputContainer: {
    height: 45,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    fontSize: 30,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
    width: 300,
  },
  inputButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '30'
  }
})