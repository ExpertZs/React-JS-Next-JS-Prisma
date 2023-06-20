function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error('Geolocation is not supported in this browser.'));
    }
  });
}

getCurrentLocation()
  .then((location) => {
    console.log('Latitude:', location.latitude);
    console.log('Longitude:', location.longitude);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
