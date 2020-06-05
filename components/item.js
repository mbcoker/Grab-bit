import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {ListItem} from 'react-native-elements';
const Item = (props) => {
  return (
    <View>
      <ListItem
        title={props.name}
        bottomDivider
        chevron
        onPress={()=>{
          props.navigation.navigate('Item', {...props});
        }}
      /></View>
  );
}

export default Item;