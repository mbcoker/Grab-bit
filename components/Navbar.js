import React from 'react';
import { Button, View, Text } from 'react-native';
import { navigate } from './RootNavigation';

const Navbar = (props) => {
  return (
    <View>
      <Text>Nav</Text>
      <Button
        onPress={()=>{
          navigate('Categories');
        }}
      />
    </View>
  );
};

export default Navbar;
