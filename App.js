import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';

// Importing Components
import WeatherCard from './components/WeatherCard';
import PressureHumidity from './components/PressureHumidity';
import HorizontalLine from './components/HorizontalLine';
import Header from './components/Header';
import Loading from './components/Loading';

//Importing Methods
import {geolocationPermissionHandler} from './components/geoLocationSetup';
import {getForecast, getCurrentWeather} from './components/apiCalls';

//Importing Assets
import {COLORS, SIZES} from './assets';
import {FONT} from './assets/constants/theme';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const App = () => {
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [clouds, setClouds] = useState(null);
  const [currentTemp, setCurrentTemp] = useState(null);
  const [currentIcon, setCurrentIcon] = useState('10d@.5x.png');
  const [forecast, setForecast] = useState([]);
  const [pressure, setPressure] = useState(0);
  const [humidity, setHumidity] = useState(0);

  useEffect(() => {
    refreshScreen();
  }, []);
  const refreshScreen = async () => {
    console.log('refreshing');
    await geolocationPermissionHandler(setCurrentLatitude, setCurrentLongitude);
    await getCurrentWeather(
      setCurrentTemp,
      setClouds,
      setCurrentIcon,
      setPressure,
      setHumidity,
      currentLongitude,
      currentLatitude,
    );
    await getForecast(setForecast, currentLongitude, currentLatitude);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header />
      {/* Todays Temperature */}
      <View style={{flex: 0.4, padding: 15}}>
        <Text
          style={{
            fontSize: 16.5,
            fontFamily: FONT.medium,
            fontStyle: 'normal',
            color: COLORS.black,
          }}>
          Today
        </Text>
        {!currentTemp ? (
          <Loading />
        ) : (
          <Text
            style={{
              fontSize: 96,
              fontFamily: FONT.bold,
              color: COLORS.secondary,
              fontWeight: 'normal',
            }}>
            {Math.round(Number(currentTemp))}°C
          </Text>
        )}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: FONT.bold,
                color: COLORS.black,
                fontWeight: 'normal',
              }}>
              Clouds
            </Text>
            {!clouds ? (
              <Loading />
            ) : (
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: FONT.regular,
                  color: COLORS.gray,
                  fontWeight: 'normal',
                }}>
                {clouds}
              </Text>
            )}
          </View>
          <View style={{position: 'absolute', top: -30, right: SIZES.padding}}>
            <Image
              source={{uri: `http://openweathermap.org/img/wn/${currentIcon}`}}
              style={{width: 126, height: 173}}
            />
          </View>
        </View>
      </View>
      <View
        style={{flex: 0.05, justifyContent: 'center', alignItems: 'center'}}>
        {!clouds ? (
          <Text
            style={{fontFamily: FONT.regular, fontSize: 15}}
            onPress={() => refreshScreen()}>
            ↻Tap to refresh
          </Text>
        ) : (
          <></>
        )}
      </View>
      <View style={{flex: 0.32}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-around',
            alignItems: 'center',
            margin: 10,
          }}
          style={{
            height: 200,
            backgroundColor: COLORS.white,
          }}>
          {forecast.length < 1 ? (
            <Loading />
          ) : (
            forecast.map((item, index) => (
              <WeatherCard
                key={item.dt_txt}
                weather_icon={item.weather[0].icon}
                temperature={item.main.temp}
                time={item.dt_txt}
              />
            ))
          )}
        </ScrollView>
      </View>
      {/* cards */}
      <View style={{flex: 0.15}}>
        {/* top line */}
        <HorizontalLine />
        <View
          style={{
            flex: 0.9,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <PressureHumidity symbol="hPa" title="Pressure" value={pressure} />
          <View
            style={{
              height: 90,
              width: 1,
              backgroundColor: COLORS.line,
              // flex: 0.1,
            }}></View>
          <PressureHumidity symbol="%" title="Humidity" value={humidity} />
        </View>

        <HorizontalLine />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  topHalf: {
    flex: 1 / 2,
    justifyContent: 'center',
  },
  bottomHalf: {
    flex: 1 / 2,
  },
});
