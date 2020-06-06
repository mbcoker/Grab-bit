import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { navigate } from '../utils/RootNavigation';
import { AntDesign } from '@expo/vector-icons';

const Navbar = (props) => {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        onPress={()=>{
          navigate('Categories');
        }}
      >
        {/* <Text>Home</Text> */}
        <AntDesign name="home" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>{
          navigate('Scanner');
        }}
      >
        {/* <Text>Scanner</Text> */}
        <AntDesign name="scan1" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 90,
    backgroundColor: '#1e90ff',

  }
})
