import React, { useContext } from 'react';
import { CategoryContext } from '../context/categoriesReducer';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import { processFontFamily } from 'expo-font';
import { blue } from 'ansi-colors';
import { navigate } from '../utils/RootNavigation';

const ItemShow = ({ route }) => {
  const { name, brand, quantity, notes, category_id, id } = route.params  

  const navigateToItemForm = () => {
    navigate('ItemForm', {
      name,
      brand,
      quantity,
      category_id,
      id
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.brand}>{brand}</Text>
        <View style={styles.flexRow}>
          <Text style={styles.quantity}>Quantity: {quantity}</Text>
        </View>
        <Text style={{fontSize: 20}}>Notes:</Text>
        <Text style={styles.notes}>{notes}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
            <View style ={{alignItems: ''}}>
              <TouchableOpacity onPress={navigateToItemForm}>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
            </View>
            </View>
          </View>
      <View/>
    </ScrollView>
  )
}

export default ItemShow

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginTop: 50,
    marginRight: 25,
  },
  name: {
    color: '#111',
    fontSize: 20,
  },
  brand: {
    fontSize: 15,
    color: '#808080',
    marginTop: 6,
    marginLeft: 8,
    marginBottom: 20,
  }, 
  button: {
    marginTop: 5,
    height: 25,
    fontSize: 25,
    marginLeft: 18,
  }, 
  quantity: {
    marginTop: 10,
    marginRight: 20,
    fontSize: 18,
    marginBottom: 30,
  },
  notes: {
    fontSize: 15,
    color: '#808080',
    marginLeft: 8,
  },
  editButton: {
    paddingTop: 15,
    fontSize: 20,
    color: '#2196f3',
    maxWidth: 100,

  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  save: {
    // paddingTop: 220,
    color: '#2196f3',
    fontSize: 20,
    maxWidth: 100,
    maxHeight: 25,
  },
});
