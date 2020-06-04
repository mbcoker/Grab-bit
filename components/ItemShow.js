import React, { useContext } from 'react';
import { CategoryContext } from '../context/categoriesReducer';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
      </View>
      <Text style={styles.brand}>{brand}</Text>
      <Text style={{fontSize: 23}}>Notes:</Text>
      <Text style={styles.notes}>{notes}</Text>
      <TouchableOpacity
        onPress={navigateToItemForm}
      >
        <Text style={styles.editButton}>Edit</Text>
      </TouchableOpacity>
      <View style={styles.flexRow}>
        <TouchableOpacity>
          <Text style={styles.delete}>Remove</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.save}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    fontSize: 45,
    marginRight: 80
  },
  brand: {
    fontSize: 30,
    color: '#808080',
    marginTop: 6,
    marginLeft: 8,
    marginBottom: 100,
  }, 
  button: {
    marginTop: 10,
    height: 25,
    fontSize: 25,
    marginLeft: 18,
  }, 
  quantity: {
    marginTop: 10,
    fontSize: 25,
    marginLeft: 25,
  },
  notes: {
    fontSize: 20,
    color: '#808080',
    marginLeft: 8,
  },
  editButton: {
    fontSize: 15,
    marginLeft: 280,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  save: {
    marginTop: 220,
    marginLeft: 190,
    color: 'blue',
    fontSize: 20,
  },
  delete: {
    marginTop: 220,
    color: 'red',
    fontSize: 20,
  }
});
