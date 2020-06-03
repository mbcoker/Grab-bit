import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { getCameraPermission, checkCameraPermission } from '../utils/permissions'
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { navigate } from '../utils/RootNavigation';

const Scanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
 
  useEffect(() => {
    // Get permission if necessary
    checkCameraPermission()
      .then(status => {
        console.log(status.status)
        if(status.status === 'granted') setHasPermission(true);
        if(status.status === 'denied') setHasPermission(false);
      })
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    //handle request here
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    checkCameraPermission()
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
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

export default Scanner;
