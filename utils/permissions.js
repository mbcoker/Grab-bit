import * as Permissions from 'expo-permissions';

export async function getCameraPermission() {
  console.log('gerCameraPermission')
  // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
  const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA);
  if (status === 'granted') {
    console.log('hit granted access')
  } else {
    // throw new Error('Camera permission not granted');
    console.log('access not granted')
  }
}

export async function checkCameraPermission() {
  // return status
  return { status } = await Permissions.getAsync(Permissions.CAMERA);
}