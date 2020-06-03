import React from 'react';
import { Button, View, Text } from 'react-native';
import { navigate } from './RootNavigation';

const Navbar = (props) => {
  return (
    <View>
      <Text>Nav</Text>
      <Button
        title="Home"
        onPress={()=>{
          navigate('Categories');
        }}
      />
       <Button
        title="Scanner"
        onPress={()=>{
          navigate('Scanner');
        }}
      />
    </View>
  );
};

export default Navbar;
