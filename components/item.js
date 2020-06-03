import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Item = (props) => {
  return (
    <View>
    <Button
      title={props.name}
      onPress={()=>{
        props.navigation.navigate('ItemShow', {...props});
      }}
    />
    </View>
  );
}

export default Item;
