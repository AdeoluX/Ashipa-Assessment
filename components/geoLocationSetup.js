import RNLocation from 'react-native-location';

RNLocation.configure({
  distanceFilter: 0,
});

const geolocationPermissionHandler = async (
  setCurrentLatitude,
  setCurrentLongitude,
) => {
  console.log('Permision');
  let permission = await RNLocation.checkPermission({
    ios: 'whenInUse', // or 'always'
    android: {
      detail: 'coarse', // or 'fine'
    },
  });
  let location;
  if (!permission) {
    permission = await RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
        rationale: {
          title: 'We need to access your location',
          message: 'We use your location to show where you are on the map',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    });
    location = await RNLocation.getLatestLocation({timeout: 10000});
  } else {
    console.log('here');
    location = await RNLocation.getLatestLocation({timeout: 100000});
    await setCurrentLongitude(location.longitude);
    await setCurrentLatitude(location.latitude);
  }
};

export {geolocationPermissionHandler};
