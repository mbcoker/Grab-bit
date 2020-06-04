import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import { getCameraPermission, checkCameraPermission } from '../utils/permissions'
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { navigate } from '../utils/RootNavigation';
// const axios = require('axios');
// require('dotenv').config();

const Scanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Get permission if necessary
    checkCameraPermission().then((status) => {
      console.log(status.status);
      if (status.status === 'granted') setHasPermission(true);
      if (status.status === 'denied') setHasPermission(false);
    });
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    //handle request here

    const url = `https://api.barcodelookup.com/v2/products?barcode=${data}&formatted=y&key=f7ks7ed91sbfgq460zjvkoi3dc22f8`;

    try {
      let response = await fetch(url);
      let json = await response.json();
      // console.log(json['products'][0]['product_name']);
      const productName = json['products'][0]['product_name'];

      const brand = json['products'][0]['brand'];

      const price = json['products'][0]['stores'][0]['store_price'];

      const description = json['products'][0]['description'];

      console.log(productName, brand, price, description);
    } catch (error) {
      console.log(error);
    }
  };

  if (hasPermission === null) {
    checkCameraPermission();
  }

  if (hasPermission === false) {
    alert('You must grant access to your camera in sytem settings');
    navigate('Categories');
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
      {/* {item !== null ? <Text>Hi</Text> : null} */}
    </View>
  );
};

export default Scanner;
