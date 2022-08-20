import axios from 'axios';
import {URLS} from '../assets';
const currentWeather = (long, latt) => {
  const call = axios
    .get(
      `${URLS.base_url}weather?lat=${latt}&lon=${long}&appid=${URLS.api_key}&units=metric`,
    )
    .then(res => {
      return {status: true, data: res.data};
    })
    .catch(error => {
      return {status: false, data: error};
    });
  return call;
};

const hourlyWeather = (long, latt) => {
  const call = axios
    .get(
      `${URLS.base_url}forecast?lat=${latt}&lon=${long}&appid=${URLS.api_key}&units=metric`,
    )
    .then(res => {
      return {status: true, data: res.data.list};
    })
    .catch(error => {
      return {status: false, data: error};
    });
  return call;
};

async function getForecast(setForecast, currentLongitude, currentLatitude) {
  console.log('forecast');
  const call = await hourlyWeather(currentLongitude, currentLatitude);
  if (!call.status) {
    return alert('api call failed');
  } else {
    return setForecast(call.data);
  }
}

async function getCurrentWeather(
  setCurrentTemp,
  setClouds,
  setCurrentIcon,
  setPressure,
  setHumidity,
  currentLongitude,
  currentLatitude,
) {
  console.log('current');
  const call = await currentWeather(currentLongitude, currentLatitude);
  if (!call.status) {
    alert('api call failed');
  } else {
    setCurrentTemp(call.data.main.temp);
    setClouds(call.data.weather[0].description);
    setCurrentIcon(`${call.data.weather[0].icon}.png`);
    setPressure(call.data.main.pressure);
    setHumidity(call.data.main.humidity);
  }
}

export {currentWeather, hourlyWeather, getForecast, getCurrentWeather};
